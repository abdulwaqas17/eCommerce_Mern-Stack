let mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    fullname: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['user', 'admin', 'employee'], default: 'admin' },
 
});


let admin = mongoose.model('admin', adminSchema);
module.exports = admin;