const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());



app.use("/product", require("./controller/product.controller"));


let server = app.listen(4545, function(){
	console.log('Server listen on port: 4545');
})