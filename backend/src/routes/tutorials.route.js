// Import the Express framework
const express = require('express');

// Create a router instance
const router = express.Router();

// Import the tutorial controller module
const tutCtrl = require('../controllers/tutorial.controller');

// Define routes and their corresponding controller functions
router.get("/getall", tutCtrl.getAllTutorial);    // Route to get all tutorials
router.get('/:id', tutCtrl.getTutorialById);        // Route to get a tutorial by ID
router.post('/add', tutCtrl.addTutorial);           // Route to add a new tutorial
router.put('/:id', tutCtrl.updateTutorial);         // Route to update a tutorial by ID
router.delete('/:id', tutCtrl.deleteTutorial);      // Route to delete a tutorial by ID

// Export the router for use in other parts of the application
module.exports = router;
