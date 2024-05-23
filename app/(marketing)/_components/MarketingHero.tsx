import Image from "next/image";

function MarketingHero() {
  return (
    <div className="flex flex-col md:flex-row items-center w-fit m-4 md:mx-20 lg:mx-40 bg-red-50/50 rounded-xl">
      <h1 className="text-2xl md:text-3xl lg:text-4xl md:leading-10 font-bold tracking-tighter p-8 h-min break-normal text-[#fc3c05]">
        Discover Better Health
        <br /> Products and Ideas for Well-Being.
      </h1>
      <Image
        className="rounded-lg"
        src={"/images/mask.jpg"}
        alt="idea"
        width={450}
        height={450}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default MarketingHero;
