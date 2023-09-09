const express = require('express');
const router = express.Router();

const tutCtrl = require('../controllers/tutorial.controller');

router.get("/getall",tutCtrl.getAllTutorial);
router.get('/:id',tutCtrl.getTutorialById);
router.post('/add',tutCtrl.addTutorial);
router.put('/:id',tutCtrl.updateTutorial);
router.delete('/:id',tutCtrl.deleteTutorial);

module.exports = router;


// app.post('/tutorials/add', (req, res) => {
//     console.log(req.body);
//     res.send({ data: 'sucsess' });
//   })
  
//   app.get('/tutorials/getall', (req, res) => {
//     res.send({
  
//       "tutorials": [
  
//         {
  
//           "id": 123243323,
  
//           "title": "Learn React",
  
//           "description": "React Learning1",
  
//           "published": false
  
//         },
  
//         {
  
//           "id": 23423423423,
  
//           "title": "Learn Redux",
  
//           "description": "Redux Learning",
  
//           "published": true
  
//         }
  
//       ]
  
//     })
//   })
  
//   app.get('/tutorials/:id', (req, res) => {
//     console.log('inside get by id', req.params.id)
//     res.send({
//       "tutorials": [
//         {
//           "id": 1,
  
//           "title": "Learn React update",
  
//           "description": "React Learning",
  
//           "published": true
//         }
//       ]
  
//     })
//   })
  
//   app.delete('/tutorials/delete/:id', (req, res) => {
//     console.log('inside get by id delete', req.params.id)
//     res.send({
//       "tutorials": [
//         { message: 'sucess' }
//       ]
  
//     })
//   })