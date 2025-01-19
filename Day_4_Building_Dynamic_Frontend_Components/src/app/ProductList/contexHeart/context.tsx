'use client';

import React, { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CartContextType {
  heart: Product[];
  addToHeart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const HeartProvider = ({ children }: { children: React.ReactNode }) => {
  const [heart, setHeart] = useState<Product[]>([]);

  const addToHeart = (product: Product) => {
    setHeart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setHeart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setHeart([]);
  };

  // Calculate total number of items in the cart
  const cartCount = heart.length;

  // Calculate the total price of the cart
  const totalPrice = heart.reduce((total, product) => total + product.price, 0);

  return (
    <CartContext.Provider
      value={{ heart, addToHeart, removeFromCart, clearCart, cartCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartHeart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider2");
  }
  return context;
};