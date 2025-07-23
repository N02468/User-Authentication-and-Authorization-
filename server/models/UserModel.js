const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['admin', 'analyst', 'user'], // Add roles as needed
    default: 'user',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
