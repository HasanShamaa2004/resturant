export interface Product {
    id: number;
    title: string;
    price: string;
    count: number;
  }
  
export interface ProductState {
    products: Product[];
  }