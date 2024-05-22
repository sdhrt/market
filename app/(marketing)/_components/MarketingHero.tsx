import Image from "next/image";

function MarketingHero() {
  return (
    <div className="flex flex-col md:flex-row items-center w-fit m-4 md:mx-20 lg:mx-40 bg-neutral-200 rounded-xl">
      <h1 className="text-xl md:text-2xl lg:text-3xl md:leading-10 font-bold tracking-tighter p-8 h-min">
        Discover Better Health: Products and Ideas for Well-Being.
      </h1>
      <Image
        className="rounded-lg"
        src={"/images/idea.jpg"}
        alt="idea"
        width={450}
        height={450}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default MarketingHero;
