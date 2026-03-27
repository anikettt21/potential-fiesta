const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },
  password: {
    type: String,
    required: true,
  },
  hasPaid: {
    type: Boolean,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  paypalOrderId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save hook for password hashing
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const bcrypt = require('bcryptjs');
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('User', userSchema);
