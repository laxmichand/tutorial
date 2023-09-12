const mongoose = require('mongoose');

// Tutorial schema
const tutorialSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title required"]
    },
    description: {
        type: String,
        required: [true, "Description required"]
    },
    published: {
        type: Boolean,
        required: [true, "Flag required"],
    },
    createdAt: {
        type: Date,
        default: Date.now  // Set the default value to the current date and time
    },
    updatedAt: {
        type: Date,
        default: Date.now  // Set the default value to the current date and time
    }
}, { versionKey: false });

// Model
module.exports = mongoose.model('Tutorial', tutorialSchema);
