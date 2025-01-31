import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const productRouter = express.Router();

productRouter
  .route("/")
  .post(
    upload.fields([
      { name: "image1", maxCount: 1 },
      { name: "image2", maxCount: 1 },
      { name: "image3", maxCount: 1 },
      { name: "image4", maxCount: 1 },
    ]),
    asyncHandler(addProduct)
  )
  .get(asyncHandler(listProduct));

productRouter
  .route("/:id")
  .delete(asyncHandler(removeProduct))
  .get(asyncHandler(singleProduct));

export default productRouter;
