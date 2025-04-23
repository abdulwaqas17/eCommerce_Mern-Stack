let mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullname: String,
    email: { type: String, unique: true },
    password: String,
    number: String,
    address: String,
    country: String,
    dob: String,
    department: { type: String, enum: ['Inventory', 'Orders', 'Support', 'Accounts', 'Logistics'], default: 'Support' },
    role: { type: String, default: 'employee' },
    profileImage: String,
    joiningDate: { type: Date, default: Date.now }
});


let employees = mongoose.model('employees', employeeSchema);
module.exports = employees;