"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

function BuyButton() {
  return (
    <div>
      <Button variant={"outline"}>
        <ShoppingCartIcon size={24} />
      </Button>
    </div>
  );
}

export default BuyButton;
