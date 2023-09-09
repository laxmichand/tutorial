const mongoose = require('mongoose');

// tutorial schema
var tutorialSchema = mongoose.Schema({
    id: {
        type: String,
        index: true,
        unique: true
    },
    title: {
        type: String,
        required: [true, "Title reuired"],
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        required: [true, "flag required"],
    },
    deleted: {
        type: Boolean,
        required: [true, "flag required"]
    },
    createdAt: Date,
    updatedAt: Date,
},
    { versionKey: false }
);

// Model
module.exports = mongoose.model('Tutorials', tutorialSchema);