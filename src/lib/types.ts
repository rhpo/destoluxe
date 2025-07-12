
export type Product = {
    id: string;
    name: string;
    price: {
        old: number,
        new: number;
    };
    currency: string;
    image: string;
    inStock: boolean;
    description: string;
    category: string;
    weight: string;
    brand: string;
    details: {
      title: string;
      content: string;
    }[];
    features: string[];
}

// CartItem extends Product
export type CartItem = Product & {
    quantity: number;
};

export type Cart = CartItem[];

export type Customer = {
    // id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

export type Order = {
    cart: Cart;
    customer: Customer;
}
