const mongoose = require('mongoose')
const TutorialM = require('../models/tutorials.model');
const tutorialsModel = require('../models/tutorials.model');

console.log(TutorialM)

async function getTutorial() {
    const tutorial = await TutorialM.find({});
    return tutorial;
}

// Get All Tutorial
exports.getAllTutorial = async (req, res) => {
    try {
        const allTutorial = await TutorialM.find().sort({ _id: -1 });

        res.status(200).json(allTutorial);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// Get Tutorial by id
exports.getTutorialById = async (req, res) => {
    const { id } = req.params;
    try {
        const tutorial = await TutorialM.findById(id);
        res.status(200).json(tutorial);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Insert a new Tutorial
exports.addTutorial = async (req, res) => {

    const newTutorial = new TutorialM(req.body)

    try {
        const existingTutorial = await TutorialM.findOne({ title: req.body.title })

        if (existingTutorial) return res.status(404).json({ message: "Tutorial already exist" })
        await newTutorial.save();

        res.status(201).json(newTutorial);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Update a Book
exports.updateTutorial = async (req, res) => {

    const { id } = req.params
    const tutorial = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No tutorial with that id')

        const updatedTutorial = await TutorialM.findByIdAndUpdate(id, { ...tutorial, id }, { new: true })

        res.status(201).json(updatedTutorial)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


// Delete a Book
exports.deleteTutorial = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No tutorial with id: ${id}`);

        await tutorialsModel.findByIdAndRemove(id);

        res.status(200).json({ message: "Tutorial deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}
