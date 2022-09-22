import { Product } from "./product";
import products from "./product-schema";

export const getProductList = async (req: any, res: any) => {
  products.find((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      console.log(JSON.stringify(result));
      res.send(result);
    }
  });
};

export const createProduct = async (req: any, res: any) => {
  const request: Product = req.body;
  console.log(JSON.stringify(request));
  let prod = new products(request);
  prod.save((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      console.log(JSON.stringify(result));
      res.send(result);
    }
  });
};

export const updateProduct = async (req: any, res: any) => {
  let product: Product = req.body;
  product.id = req.body._id;
  const updProduct = {
    _id: product.id,
    productName: product.productName,
    productCode: product.productCode,
    productDesc: product.productDesc,
  };
  console.log("BODY", product, updProduct);
  products.findOneAndUpdate(
    { _id: product.id },
    updProduct,
    { upsert: true, new: true },
    (err, result) => {
      console.log("result", result);

      if (err) {
        res.send(`Error! ${err}`);
      } else {
        console.log(JSON.stringify(result));
        res.send(result);
      }
    }
  );
};

export const deleteProduct = async (req: any, res: any) => {
  const productID: number = req.body["id"];
  console.log(`Product ${productID}`);
  //delete
  products.deleteOne({ _id: productID }, (err: any, result: any) => {
    //Callback response
    if (err) {
      res.send("Error!");
    } else {
      console.log(JSON.stringify(result));
      res.send(result);
    }
  });
};
