const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"]},
 price: {
    type: Number,
    required: [true, "Please Enter product Price"],},

  quantity: {
    type: Number,
    required: [true, "Please Enter quantity"],},


  productId: {
    type: Number,
    required: [true, "Please Enter product ID"],
   
  },
 
 
  
 
     
 
});

productModel= mongoose.model("Product", productSchema);


module.exports=productModel