const express = require('express');
const router = express.Router()

// Model
const Model = require('../model/model');

// Router
module.exports = router;

//Post Method
router.post('/book_room', async (req, res) => {
  const data = new Model({
    nim: req.body.nim,
    name: req.body.name,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    date: req.body.date
  })
  // Try to save
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

//Get all Method
router.get('/getAll', (req, res) => {
  res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
  res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
  res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
  res.send('Delete by ID API')
})