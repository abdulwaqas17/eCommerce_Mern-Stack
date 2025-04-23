let mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    role: { type: String, default: 'admin' },
 
});


let admin = mongoose.model('admin', adminSchema);
module.exports = admin;