
const mongoose = require('mongoose');


const toolSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    toolLink: {
        type: String,
        required: true
    },
    toolType: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Tools', toolSchema);