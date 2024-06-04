"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useCartStore } from "@/store/CartStore";
import { useState } from "react";

function BuyButton({ id }: { id: number }) {
  const { addToCart } = useCartStore();
  const [isBuying, setIsBuying] = useState(false);

  const handleClick = () => {
    setIsBuying(true);
    addToCart(id);
    toast({
      title: "Added to the cart",
    });
    setIsBuying(false);
  };
  return (
    <div>
      <Button
        variant={"outline"}
        className="bg-[#0171dc]"
        onClick={handleClick}
        disabled={isBuying}
      >
        <span className="font-semibold text-yellow-500">Buy</span>
      </Button>
    </div>
  );
}

export default BuyButton;
