const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nim: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    date: {
      type: Date,
      required: true
    }
})

module.exports = mongoose.model('Data', dataSchema)