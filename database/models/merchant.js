
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var merchant_schema = new Schema({
    company_name: String,
    company_address: String,
    email: { type: String, required: true, unique: true }, // Make email unique and required
    secret_key: String,
    public_key: String,
});



module.exports = mongoose.model('merchant', merchant_schema);