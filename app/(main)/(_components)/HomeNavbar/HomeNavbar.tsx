import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

function HomeNavbar() {
  return (
    <nav className="flex items-center justify-around py-4">
      <Link href={"/home"}>
        <div className="font-black text-2xl">Market</div>
      </Link>
      <Link href={"/product"}>
        <div className="text-neutral-600 text-sm">Products</div>
      </Link>
      <UserButton />
    </nav>
  );
}

export default HomeNavbar;
