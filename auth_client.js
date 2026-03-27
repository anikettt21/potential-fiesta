/**
 * auth_client.js
 * Handles client-side authentication states and UI updates
 */

const Auth = {
  getToken() {
    return localStorage.getItem('token');
  },

  getUser() {
    const user = localStorage.getItem('user');
    if (!user || user === 'undefined') return null;
    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  },

  isLoggedIn() {
    return !!this.getToken();
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'index.html';
  },

  async updateUI() {
    let user = this.getUser();
    const navActions = document.querySelector('.mp-nav-actions');
    const headerInner = document.querySelector('.mp-header-inner');

    if (this.isLoggedIn()) {
      try {
        // Validate truth from server to prevent localStorage spoofing
        const res = await fetch('/api/auth/me', {
          headers: { 'Authorization': 'Bearer ' + this.getToken() }
        });
        if (res.ok) {
          user = await res.json();
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          // Token invalid
          this.logout();
          return;
        }
      } catch (error) {
        // Silent catch for network errors
      }
    }

    if (this.isLoggedIn() && user) {
      // Find or create user status in header
      let userArea = document.getElementById('user-header-area');
      if (!userArea) {
        userArea = document.createElement('div');
        userArea.id = 'user-header-area';
        userArea.style.display = 'flex';
        userArea.style.gap = '12px';
        userArea.style.alignItems = 'center';

        // Add to nav actions
        if (navActions) {
           // Swap "Build Resume" or add next to it
           const buildBtn = navActions.querySelector('.mp-header-cta');
           if (buildBtn) {
             // Keep it, but add logout
           }
        }
      }

      // Premium Badge
      const premiumBadge = user.hasPaid 
        ? '<span style="background:#fefce8; color:#854d0e; font-size:10px; padding:2px 6px; border-radius:4px; font-weight:700; border:1px solid #fef08a;">PRO</span>' 
        : '';

      // Set content
      if (navActions) {
        // Find existing login link if any and remove it
        const loginLinks = document.querySelectorAll('a[href="login.html"], a[href="signup.html"]');
        loginLinks.forEach(link => link.remove());

        if (!navActions.querySelector('.user-profile')) {
          const safeUsername = String(user.username || 'User')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
          const safeFirst = safeUsername.split(' ')[0];
          const safeInitial = safeUsername[0].toUpperCase();

          navActions.insertAdjacentHTML('beforeend', `
            <div class="user-profile profile-actions">
              <div class="user-profile-info">
                <div class="user-name">${safeFirst} ${premiumBadge}</div>
                <div class="user-plan">${user.hasPaid ? 'Full Access' : 'Free Plan'}</div>
              </div>
              <div class="user-avatar">${safeInitial}</div>
              <button onclick="Auth.logout()" class="user-logout-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </button>
            </div>
          `);
        }
      }
    } else {
      // Not logged in, ensure Login/Signup buttons exist
      if (navActions) {
        const hasLogin = !!navActions.querySelector('a[href="login.html"]');
        if (!hasLogin) {
          navActions.insertAdjacentHTML('afterbegin', `
            <a href="login.html" class="mp-nav-link" style="font-weight:700; color:var(--text);">Log In</a>
          `);
        }
      }
    }
  }
};

// Auto-run on load
document.addEventListener('DOMContentLoaded', () => Auth.updateUI());
