const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const productSchema = new Schema({
	uuid: {type: String, required: false, unique: true},
	name: {type: String, required: true },
	brand: {type: String, required: true },
	price: {type: String, required: true },
	quantity: {type: String, required: false }
},{
	timestamps: true
});

productSchema.pre("save", function(next){
	this.uuid = "product"+ crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
	console.log(this.uuid);

	next();
})


module.exports = mongoose.model('product', productSchema);