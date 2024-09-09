
var mongoose  = require('mongoose')

var registerschema = new mongoose.Schema({
    name: {
        type: "string"
    },
    email: {
        type: "string"
    },
    password: {
        type: "string"
    }
})

module.exports = mongoose.model('register', registerschema)
