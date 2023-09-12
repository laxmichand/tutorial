const mongoose = require('mongoose');
const TutorialM = require('../models/tutorials.model');

// Helper function to handle errors
const handleErrors = (res, error) => {
    // Determine the HTTP status code based on the error type
    const status = error instanceof mongoose.Error.ValidationError ? 400 : 500;
    // Respond with a JSON error message and the appropriate status code
    res.status(status).json({ message: error.message });
};

// Handle GET request to fetch all tutorials
exports.getAllTutorial = async (req, res) => {
    try {
        // Fetch all tutorials from the database and sort them by _id in descending order
        const allTutorial = await TutorialM.find().sort({ _id: -1 });
        // Respond with a 200 status and JSON containing the fetched tutorials
        res.status(200).json(allTutorial);
    } catch (error) {
        // Handle errors using the handleErrors helper function
        handleErrors(res, error);
    }
};

// Handle GET request to fetch a tutorial by its unique ID
exports.getTutorialById = async (req, res) => {
    const { id } = req.params;
    try {
        // Attempt to find a tutorial in the database by its ID
        const tutorial = await TutorialM.findById(id);
        if (!tutorial) {
            // If the tutorial is not found, respond with a 404 status and an error message
            return res.status(404).json({ message: "Tutorial not found" });
        }
        // Respond with a 200 status and JSON containing the found tutorial
        res.status(200).json(tutorial);
    } catch (error) {
        // Handle errors using the handleErrors helper function
        handleErrors(res, error);
    }
};

// Handle POST request to insert a new tutorial
exports.addTutorial = async (req, res) => {
    try {
        // Check if a tutorial with the same title already exists in the database
        const existingTutorial = await TutorialM.findOne({ title: req.body.title });
        if (existingTutorial) {
            // If a tutorial with the same title exists, respond with a 409 status and an error message
            return res.status(409).json({ message: "Tutorial already exists" });
        }
        // Create a new tutorial and add it to the database
        const newTutorial = await TutorialM.create(req.body);
        // Respond with a 201 status (resource created) and JSON containing the newly created tutorial
        res.status(201).json(newTutorial);
    } catch (error) {
        // Handle errors using the handleErrors helper function
        handleErrors(res, error);
    }
};

// Handle PUT request to update a tutorial by its unique ID
exports.updateTutorial = async (req, res) => {
    const { id } = req.params;
    try {
        // Attempt to find and update the tutorial by its ID, returning the updated document
        const updatedTutorial = await TutorialM.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedTutorial) {
            // If the tutorial is not found, respond with a 404 status and an error message
            return res.status(404).json({ message: "Tutorial not found" });
        }

        // Set the 'updatedAt' field to the current date and time
        updatedTutorial.updatedAt = new Date();
        
        // Save the updated document
        await updatedTutorial.save();

        // Respond with a 200 status and JSON containing the updated tutorial
        res.status(200).json(updatedTutorial);
    } catch (error) {
        // Handle errors using the handleErrors helper function
        handleErrors(res, error);
    }
};


// Handle DELETE request to delete a tutorial by its unique ID
exports.deleteTutorial = async (req, res) => {
    const { id } = req.params;
    try {
        // Attempt to find and remove the tutorial by its ID
        const deletedTutorial = await TutorialM.findByIdAndRemove(id);
        if (!deletedTutorial) {
            // If the tutorial is not found, respond with a 404 status and an error message
            return res.status(404).json({ message: "Tutorial not found" });
        }
        // Respond with a 200 status and a success message
        res.status(200).json({ message: "Tutorial deleted successfully." });
    } catch (error) {
        // Handle errors using the handleErrors helper function
        handleErrors(res, error);
    }
};
