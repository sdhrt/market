export interface CartItem {
  id: number;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}
