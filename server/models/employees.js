let mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullname: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
    address: String,
    department: { type: String, enum: ['Inventory', 'Orders', 'Support'], default: 'Support' },
    role: { type: String, enum: ['user', 'admin', 'employee'], default: 'employee' },
    profileImage: String,
    joiningDate: { type: Date, default: Date.now }
});


let employees = mongoose.model('employees', employeeSchema);
module.exports = employees;