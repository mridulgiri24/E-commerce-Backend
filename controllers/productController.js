import Product from "../models/productModel.js";

// add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      // image,
      bestseller,
    } = req.body;

    // const image1 = req.files.image1 && req.files.image1[0];
    // const image2 = req.files.image2 && req.files.image2[0];
    // const image3 = req.files.image3 && req.files.image3[0];
    // const image4 = req.files.image4 && req.files.image4[0];

    // const images = [image1, image2, image3, image4].filter(
    //   (item) => item != undefined
    // );

    // const imagesUrl = await Promise.all(
    //   images.map(async (item) => {
    //     let img = await item.buffer;
    //     return img;
    //   })
    // );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      // image: imagesUrl,
      // image,
      date: Date.now(),
    };

    // console.log(productData);
    const product = new Product(productData);

    await product.save();

    res.json({ success: true, message: product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// list product
const listProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, message: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// single product information
const singleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json({ success: true, message: product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// removing product
const removeProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);

    console.log("Product Deleted:", product);

    res.json({ success: true, message: product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
