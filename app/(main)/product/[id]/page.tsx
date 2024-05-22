import { getProduct } from "@/drizzle/product";
import ImageCarousel from "./_components/ImageCarousel";
import BuyButton from "./_components/BuyButton";

async function page({ params }: { params: { id: number } }) {
  const product = await getProduct(params.id);
  return (
    <div className="md:m-20 lg:m-40">
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-0 md:justify-around">
        <div className="w-100 h-100">
          {product?.images && (
            <ImageCarousel images={JSON.parse(product.images)} />
          )}
        </div>
        <div className="flex flex-col justify-between w-[40%]">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold">{product?.name}</span>
            <span className="text-sm">
              Sold by: {product?.creatorName}
            </span>
            <span className="text-sm text-muted-foreground line-clamp-4 overflow-y-scroll">
              {product?.description}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-500 font-black text-xl">
              Rs.{product?.price}
            </span>
            <div>
              <BuyButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
