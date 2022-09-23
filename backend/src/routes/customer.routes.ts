import express from "express";
// import * as productCRUD from "../domain/product/product-crud";
import * as customerCRUD from '../domain/customer/customer-crud.mongo'
const customerRouter = express.Router();

customerRouter.get("/", customerCRUD.getCustomerList);
customerRouter.post("/", customerCRUD.createCustomer);
customerRouter.post("/update", customerCRUD.updateCustomer);
customerRouter.post("/delete", customerCRUD.deleteCustomer);

export default customerRouter;
