const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Trim leading/trailing white spaces
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
      trim: true, // Trim leading/trailing white spaces
      lowercase: true, // Convert email to lowercase
      validate: {
        validator: (value) => {
          // Use a regular expression to validate the email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value);
        },
        message: 'Invalid email format',
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          // Add your password validation logic here (e.g., minimum length)
          return value.length >= 8; // Password must be at least 8 characters
        },
        message: 'Password must be at least 8 characters long',
      },
    },
    active: {
      type: Boolean,
      default: true, // Set to true by default, can be changed later
    },
    role: {
      type: String,
      enum: ['admin', 'user'], // Role can be 'admin' or 'user'
      default: 'user', // Default role is 'user'
    },
    createdAt: {
      type: Date,
      default: Date.now, // Set to the current date and time by default
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Set to the current date and time by default
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
  { versionKey: false } // Exclude version key (_v) from the document
);

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
