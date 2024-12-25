const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    date: String,
    orderNumber: String,
    kattu: String,
    name: String,
    contactNumber: String,
    stateCode: String,
    city: String,
    amount: String,
    bank: String,
    remarks: String,
    status: String,
    transportName: String,
    LRNumber: String,
    LRDate: Date,
    Box: String,
    EName: String,
})

const customerModel = mongoose.model("Customer", customerSchema);

module.exports = customerModel;