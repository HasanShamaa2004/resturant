export interface ProductOrder {
    product_id: number;
    varation_id: number;
    product_count: number;
  }
  
export interface OrderState {
    table_number: number;
    lat: number;
    long: number;
    phone_number: string;
    take_away_time: string;
    street_address: string;
    building_name: string;
    apartment_number: string;
    order_type: string;
    products: ProductOrder[];
  }