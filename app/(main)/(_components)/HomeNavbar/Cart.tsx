"use client";

import { ShoppingCartIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCartStore } from "@/store/CartStore";
import { Separator } from "@/components/ui/separator";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

function Cart() {
  const { cartItems, clearCart } = useCartStore();
  const handleClearCart = () => {
    if (cartItems.length == 0) {
      toast({
        title: "Cart is empty",
      });
      return;
    }
    clearCart();
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <ShoppingCartIcon />
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex justify-between">
            <span className="font-semibold text-md">Your cart</span>
            <button
              className="text-sm text-muted-foreground underline underline-offset-2"
              onClick={handleClearCart}
            >
              Clear items
            </button>
          </div>
          <Separator />
          <div className="flex flex-col gap-2 mt-2">
            <div className="hidden only:block text-sm text-muted-foreground py-1">
              No items in cart
            </div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <CartItem id={item.id} quantity={item.quantity} />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() =>
                toast({
                  title: "Feature not implemented",
                })
              }
            >
              Checkout
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Cart;
