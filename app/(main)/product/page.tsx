import { getProductCount, getProducts } from "@/drizzle/product";
import { productType } from "@/drizzle/schema";
import Image from "next/image";
import { Link } from "next-view-transitions";
import SearchQuery from "../(_components)/Search/SearchQuery";
import ProductPagination from "./_components/ProductPagination";

async function ProductPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const offset = Number(searchParams?.offset) || 0;
  const searchQuery = searchParams?.search;

  const { value: count } = (await getProductCount())[0];

  const products: productType[] = await getProducts({
    productName: searchQuery,
    offset: offset,
  });
  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 w-60 ">
        <SearchQuery query={"product"} search={searchParams?.search} />
      </div>
      <div className="p-2">
        <ProductPagination offset={offset} count={count} />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => {
          const image = JSON.parse(product?.images!)[0];
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <div className="border w-60 p-4 flex flex-col items-center">
                <div className="h-40 w-40 relative">
                  <Image
                    src={image}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={image}
                  />
                </div>
                <span className="text-xl font-semibold">{product.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="p-2">
        <ProductPagination offset={offset} count={count} />
      </div>
    </div>
  );
}

export default ProductPage;
