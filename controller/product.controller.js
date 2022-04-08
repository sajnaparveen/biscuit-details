const express = require("express");
const router = express.Router();
const productService = require("./product.service.js"); 
const database = require('../helper/db.js');
const product = database.product;

router.post("/create-product", create);
// router.post("/update-product", productService.update);
// router.post("/delete-product", productService.delete);
// router.post("/get-product", productService.get);
module.exports = router;



function create(req, res) {
	console.log(req.body);
	// let name = req.body.name;
	// let brand = req.body.brand;
	// let price = req.body.price;
	// let quantity = req.body.quantity;


	
	let products = new  product(req.body);
	
	let detail = products.save();

	if(detail){
				
  return res.json({ "status": "Success", "message": "product created" });

	} else {
		return	res.json({ "status": "Failed", "message": "something went worng" });
	}
};



