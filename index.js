const express = require("express");
const { initDB } = require("./dbCOnfig");
const app = express();

const productModel = require("./product");

require("dotenv").config();

initDB();
app.use(express.json());

app.post("/product/addProduct", async (req, res) => {
  const { productId, quantity, name, price } = req.body;
  try {
    product = await productModel.create({ productId, quantity, name, price });
    res
      .status(201)
      .send({ status: sucsess, comment: "product is created", product });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/product/updateProduct/:id", async (req, res) => {
  const { id } = req.params;

  try {
    updatedProduct = await productModel.findByIdAndUpdate(id, req.body);

    res
      .status(201)
      .send({
        status: sucsess,
        comment: "product is modified",
        updatedProduct,
      });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3500, () => {
  console.log(`server has startted`);
});
