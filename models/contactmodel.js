const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Mandatory']
    },
    email: {
        type: String,
        require: [true, 'Mandatory']
    },
    phone: {
        type: String,
        require: [true, 'Mandatory']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('contact',contactSchema)