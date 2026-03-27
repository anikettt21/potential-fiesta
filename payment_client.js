/**
 * payment_client.js
 * Handles PayPal integration and premium unlocking
 */

const Payment = {
  async initPayPalButton() {
    try {
      // 1. Fetch Client ID from secure backend endpoint
      const configRes = await fetch('/api/payment/config');
      if (!configRes.ok) throw new Error('Could not fetch PayPal config');
      const { clientId } = await configRes.json();

      if (!clientId) {
        throw new Error('PayPal Client ID missing from server config');
      }

      // 2. Load SDK dynamically if not already present
      if (!window.paypal) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // 3. Render Buttons
      if (window.paypal) {
        paypal.Buttons({
          createOrder: async (data, actions) => {
            try {
              const response = await fetch('/api/payment/create-order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${Auth.getToken()}`
                }
              });

              const order = await response.json();
              if (order.id) {
                return order.id;
              } else {
                throw new Error(order.message || 'Could not create order');
              }
            } catch (err) {
              console.error('Create Order Error:', err);
              alert('Error initializing payment. Are you logged in?');
              throw err;
            }
          },

          onApprove: async (data, actions) => {
            try {
              const response = await fetch('/api/payment/capture-order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${Auth.getToken()}`
                },
                body: JSON.stringify({ orderID: data.orderID })
              });

              const result = await response.json();

              if (response.ok) {
                // Success! Update local storage
                localStorage.setItem('user', JSON.stringify(result.user));
                
                // Show success message
                Payment.showSuccess();
                
                // Refresh UI after a delay
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              } else {
                alert('Payment verification failed: ' + result.message);
              }
            } catch (err) {
              console.error('Capture Order Error:', err);
              alert('Error capturing payment. Please contact support.');
            }
          },

          onError: (err) => {
            console.error('PayPal Error:', err);
            alert('An error occurred with PayPal. Please try again.');
          }
        }).render('#paypal-button-container');
      }
    } catch (err) {
      console.error('PayPal Initialization Error:', err);
      const container = document.getElementById('payment-modal-content');
      if (container) {
        container.innerHTML = `<div style="color:var(--danger); padding:20px; text-align:center;">
          <p>Failed to load payment gateway. Please refresh or check your connection.</p>
        </div>`;
      }
    }
  },

  showSuccess() {
    const container = document.getElementById('payment-modal-content');
    if (container) {
      container.innerHTML = `
        <div style="text-align:center; padding:40px 20px;">
          <div style="width:64px; height:64px; background:#f0fdf4; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 24px; color:#15803d;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 style="font-family:var(--dfont); font-size:1.8rem; margin-bottom:12px; color:var(--text);">Payment Successful!</h2>
          <p style="color:var(--text-m); margin-bottom:24px;">Your Pro account is now active. Unlocking all premium templates...</p>
        </div>
      `;
    }
  }
};

/**
 * GLOBAL FUNCTIONS
 */

window.openPaymentModal = (templateId) => {
  if (typeof Auth === 'undefined' || !Auth.isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }

  // Create modal if it doesn't exist
  let modal = document.getElementById('payment-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'payment-modal';
    modal.className = 'preview-overlay'; // Reuse preview modal styles
    modal.innerHTML = `
      <div class="preview-modal-content" style="max-width:480px;">
        <div class="preview-modal-header">
           <div class="preview-modal-info">
             <h3 class="preview-modal-name">Unlock Premium Library</h3>
             <p class="preview-modal-desc">Get lifetime access to all 58+ premium templates for just $3.</p>
           </div>
           <button class="preview-close-btn" onclick="document.getElementById('payment-modal').classList.remove('open')">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
           </button>
        </div>
        <div class="preview-modal-body" id="payment-modal-content" style="padding:32px; flex-direction:column;">
          <div style="margin-bottom:24px; background:var(--bg-soft); padding:20px; border-radius:16px; border:1px dashed var(--border-h);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span style="font-weight:600; color:var(--text-s);">Premium All-Access Pass</span>
              <span style="font-weight:800; color:var(--text);">$3.00</span>
            </div>
            <p style="font-size:12px; color:var(--text-m); line-height:1.4;">One-time payment. No hidden fees. ATS-optimized templates, priority support, and lifetime updates.</p>
          </div>
          <div id="paypal-button-container"></div>
          <p style="text-align:center; font-size:11px; color:var(--text-f); margin-top:20px;">Secured by PayPal. Verified SSL connection.</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Init PayPal if container has no children
  const container = document.getElementById('paypal-button-container');
  if (container && container.children.length === 0) {
    Payment.initPayPalButton();
  }
};
