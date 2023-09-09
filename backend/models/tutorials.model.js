const mongoose = require('mongoose');

// Tutorial schema
var tutorialSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: [true, "Title reuired"]
    },
    description: {
        type: String
    },
    published: {
        type: Boolean,
        required: [true, "flag required"],
    },
    createdAt: Date,
    updatedAt: Date
},
    { versionKey: false }
);

// Model
module.exports = mongoose.model('Tutorials', tutorialSchema);