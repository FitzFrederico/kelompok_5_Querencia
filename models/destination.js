const mongoose = require('mongoose')

const destinationSchema = mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Destination', destinationSchema, 'destinations')