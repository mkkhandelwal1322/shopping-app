type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  quantity: number;
};

type ProductState = {
  products: Product[];
};

type CartState = {
  cart: Product[];
};
