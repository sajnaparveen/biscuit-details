
const database = require('../helper/db.js');
const product = database.product;

module.exports = {
	create
	// update,
	// delete,
	// get

}

 function create(req, res) {
	console.log(req.body);
	// let name = req.body.name;
	// let brand = req.body.brand;
	// let price = req.body.price;
	// let quantity = req.body.quantity;


	
	let products = new  product(req.body);
	console.log("products",products)
	
	let detail = products.save();
	console.log("detail",detail)

	if(detail){
				
  return res.json({ "status": "Success", "message": "product created" });

	} else {
		return	res.json({ "status": "Failed", "message": "something went worng" });
	}
};


