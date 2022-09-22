import express from "express";
// import * as productCRUD from "../domain/product/product-crud";
import * as productCRUD from "../domain/product/product-crud.mongo";
const router = express.Router();

router.get("/products", productCRUD.getProductList);
router.post("/products", productCRUD.createProduct);
router.post("/updateproduct", productCRUD.updateProduct);
router.post("/deleteproduct", productCRUD.deleteProduct);

export default router;
