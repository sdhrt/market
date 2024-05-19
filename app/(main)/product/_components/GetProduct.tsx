import { getProducts } from "@/drizzle/product";
import { productType } from "@/drizzle/schema";
import Image from "next/image";
import Link from "next/link";

async function GetProduct() {
  const products: productType[] = await getProducts();
  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product) => {
        const image = JSON.parse(product?.images!)[0];
        return (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="border w-60 p-4 flex flex-col items-center">
              <div className="h-40 w-40 relative">
                <Image src={image} fill objectFit="contain" alt={image} />
              </div>
              <span className="text-xl font-semibold">{product.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default GetProduct;
