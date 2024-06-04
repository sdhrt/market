import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartState } from "./CartType";

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (id) =>
        set((state) => {
          const exists = state.cartItems.find((item) => item.id === id);
          if (exists) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return { cartItems: [...state.cartItems, { id, quantity: 1 }] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        })),
      clearCart: () => set({ cartItems: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => sessionStorage) },
  ),
);
