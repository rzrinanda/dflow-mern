import express from "express";
// import * as productCRUD from "../domain/product/product-crud";
import * as productCRUD from "../domain/product/product-crud.mongo";
const router = express.Router();

router.get("/", productCRUD.getProductList);
router.post("/", productCRUD.createProduct);
router.post("/update", productCRUD.updateProduct);
router.post("/delete", productCRUD.deleteProduct);

export default router;
