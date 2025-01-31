import mongoose from "mongoose";

const product = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array /* required: true */ },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestseller: { type: Boolean, required: true },
  date: { type: Number, required: true },
});

const Product = mongoose.models.Product || mongoose.model("Product", product);

export default Product;
