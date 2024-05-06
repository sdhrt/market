import { getProducts } from "@/drizzle/product";
import { productType } from "@/drizzle/schema";
import Image from "next/image";

async function GetProduct() {
  const products: productType[] = await getProducts();
  console.log(products);
  return (
    <div className="flex flex-col flex-wrap gap-4">
      {products.map(async (product) => {
        const image = JSON.parse(product?.images!)[0];
        return (
          <div className="border w-60 p-4" key={product.id}>
            <div className="text-sm">
              <Image src={image} width={200} height={200} alt={image} />
            </div>
            <span className="text-xl font-semibold">{product.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default GetProduct;
