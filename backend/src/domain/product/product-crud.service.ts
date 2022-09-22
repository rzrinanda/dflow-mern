import { Product, products } from "./product";

export const getAllProducts = async (): Promise<Product[]> => {
  return products;
};

export const createProduct = async (product: Product): Promise<Product> => {
  products.push(product);
  return product;
};

export const updateProduct = async (product: Product): Promise<void> => {
  let index = products.findIndex((p) => p.id === product["id"]);
  if (index > -1) {
    products[index]["productName"] = product["productName"];
    products[index]["productCode"] = product["productCode"];
    products[index]["productDesc"] = product["productDesc"];
  }
};

export const deleteProducts = async (id: number): Promise<void> => {
  console.log(`in delete product index is ${JSON.stringify(id)}`);
  let index = products.findIndex((d) => d.id === id);
  console.log(`in delete product index is ${index}`);
  if (index > 0 || index == 0) products.splice(index, 1);
};
