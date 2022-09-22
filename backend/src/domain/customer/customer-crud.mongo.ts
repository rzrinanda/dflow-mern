import { Customer } from "./customer";
import customers from "./customer-schema";

export const getProductList = async (req: any, res: any) => {
  customers.find((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      console.log(JSON.stringify(result));
      res.send(result);
    }
  });
};

export const createProduct = async (req: any, res: any) => {
  const request: Customer = req.body;
  console.log(JSON.stringify(request));
  let prod = new customers(request);
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
  let customer: Customer = req.body;
  customer.id = req.body._id;
  const updProduct = {
    _id: customer.id,
    customerName: customer.customerName,
    customerCode: customer.customerCode,
    customerDesc: customer.customerDesc,
  };
  console.log("BODY", customer, updProduct);
  customers.findOneAndUpdate(
    { _id: customer.id },
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
  const customerID: number = req.body["id"];
  console.log(`Customer ${customerID}`);
  //delete
  customers.deleteOne({ _id: customerID }, (err: any, result: any) => {
    //Callback response
    if (err) {
      res.send("Error!");
    } else {
      console.log(JSON.stringify(result));
      res.send(result);
    }
  });
};
