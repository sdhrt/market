import { getUserProducts } from "@/drizzle/product";
import { productType } from "@/drizzle/schema";
import { Link } from "next-view-transitions";
import DeleteAlert from "./_components/DeleteAlert";
import { ScrollArea } from "@/components/ui/scroll-area";

async function UserProducts({ email }: { email: string }) {
  const products: productType[] = await getUserProducts({ email });
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-yellow-500">Products</h1>
      <ScrollArea className="h-96 max-w-[1800px] w-[60vw] rounded-md border-2 p-2">
        {products.map((product) => {
          return (
            <div key={product.id} className="flex flex-col gap-2">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md flex flex-col w-full hover:bg-neutral-200">
                    <span className="text-xl font-semibold">
                      {product.name}
                    </span>
                    <span className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </span>
                  </div>
                </div>
              </Link>
              <div>
                <DeleteAlert name={product.name} />
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
}

export default UserProducts;
