import Image from "next/image";

function MarketingHero() {
  return (
    <div className="flex flex-col md:mt-10 md:flex-row justify-between items-center m-4 md:mx-20 lg:mx-40 rounded-xl">
      <h1
        className="md:text-3xl lg:text-4xl md:leading-10
                flex justify-start
                font-bold tracking-tighter p-8 break-normal text-[#fc3c05]"
      >
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
