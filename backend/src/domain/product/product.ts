export interface Product {
  id: number | null;
  productName: string;
  productCode: string;
  productDesc: string;
}

export const products: Product[] = [
  { id: 1, productName: "T-shirts", productCode: "TS101", productDesc: "Simple T-Shirts" },
  { id: 2, productName: "Polo Shirts", productCode: "PS100", productDesc: "Simple Polo Shirts" },
  { id: 3, productName: "Jacket", productCode: "OJ022", productDesc: "Jacket" },
  { id: 4, productName: "Denim Jeans", productCode: "JB011", productDesc: "Denim Jeans" },
  { id: 5, productName: "Chino Pants", productCode: "CB023", productDesc: "Chino Pants" },
  { id: 6, productName: "Hoodie", productCode: "OH300", productDesc: "Hoodie Basic" },
  { id: 7, productName: "Hat", productCode: "AH410", productDesc: "Baseball Hat" },
];
