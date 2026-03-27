const express = require('express');
const paypal = require('@paypal/checkout-server-sdk');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

/**
 * PAYPAL CLIENT CONFIG
 */
function getPayPalClient() {
  const isSandbox = process.env.PAYPAL_MODE !== 'live';
  const Environment = isSandbox 
    ? paypal.core.SandboxEnvironment 
    : paypal.core.LiveEnvironment;

  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials missing from environment variables.');
  }

  return new paypal.core.PayPalHttpClient(new Environment(clientId, clientSecret));
}

/**
 * CLIENT CONFIG
 */
router.get('/config', (req, res) => {
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID });
});

/**
 * CREATE ORDER
 */
router.post('/create-order', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authorization required.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: '3.00',
        },
        description: 'FolioTub — Premium All-Access Template Pass',
      }],
    });

    const client = getPayPalClient();
    const response = await client.execute(request);

    res.json({ id: response.result.id });
  } catch (error) {
    console.error('Create order error:', error);
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }
    res.status(500).json({ message: 'Internal server error.' });
  }
});

/**
 * CAPTURE ORDER
 */
router.post('/capture-order', async (req, res) => {
  try {
    const orderID = req.body.orderID ? String(req.body.orderID) : '';
    const token = req.headers.authorization?.split(' ')[1];

    if (!orderID) {
      return res.status(400).json({ message: 'Order ID is required.' });
    }

    if (!token) {
      return res.status(401).json({ message: 'Authorization required.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    const client = getPayPalClient();
    const response = await client.execute(request);

    if (response.result.status === 'COMPLETED') {
      // Update user in database
      const user = await User.findByIdAndUpdate(userId, {
        hasPaid: true,
        paidAt: new Date(),
        paypalOrderId: String(orderID),
      }, { new: true });

      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      return res.json({ 
        message: 'Payment successful.', 
        user: { 
          id: user._id, 
          username: user.username, 
          hasPaid: user.hasPaid 
        } 
      });
    }

    res.status(400).json({ message: 'Payment capture failed.' });
  } catch (error) {
    console.error('Capture order error:', error);
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
