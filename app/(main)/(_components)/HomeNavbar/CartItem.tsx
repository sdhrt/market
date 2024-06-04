import { useCartStore } from "@/store/CartStore";
import {
  CrossIcon,
  MinusIcon,
  MoveUpRightIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function CartItem({ id, quantity }: { id: number; quantity: number }) {
  const [product, setProduct] = useState();
  const router = useRouter();

  const { updateQuantity, removeFromCart } = useCartStore();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/v1/get/product", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const { data, error } = await response.json();
      if (error) {
        return (
          <div className="text-sm text-muted-foreground">
            product couldn{"'"}t be fetched
          </div>
        );
      }
      if (data) {
        setProduct(data);
        return;
      }
      return (
        <div className="text-sm text-muted-foreground">Error from server</div>
      );
    })();
  }, [id]);

  const handlePlus = () => {
    updateQuantity(id, ++quantity);
  };

  const handleMinus = () => {
    if (quantity == 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, --quantity);
    }
  };

  if (product) {
    return (
      <div
        key={id}
        className="group p-2 font-semibold hover:bg-neutral-100 flex justify-between"
      >
        <span
          className="font-bold flex items-center"
          onClick={() => router.push(`/product/${id}`)}
        >
          <span className="hover:cursor-pointer">
            {/* @ts-ignore */}
            {product?.name}
          </span>
          <MoveUpRightIcon
            className="text-muted-foreground hidden group-hover:block"
            size={12}
          />
        </span>
        <div className="flex items-center gap-2">
          {quantity == 1 ? (
            <XIcon
              size={18}
              className="text-red-600 hover:cursor-pointer"
              onClick={handleMinus}
            />
          ) : (
            <MinusIcon
              size={18}
              className="hover:cursor-pointer"
              onClick={handleMinus}
            />
          )}
          <span className="text-[#0171dc]">{quantity}</span>
          <PlusIcon
            size={18}
            className="hover:cursor-pointer"
            onClick={handlePlus}
          />
        </div>
      </div>
    );
  }
  return <></>;
}

export default CartItem;
