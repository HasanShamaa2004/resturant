export interface DeliveryFormData {
    name: string;
    phone: string;
    street: string;
    building: string;
    apartment: string;
    location: {
      lat: number;
      lng: number;
    };
  }