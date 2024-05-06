import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

function HomeNavbar() {
  return (
    <nav className="flex items-center justify-around py-4">
      <Link href={"/home"}>
        <div className="font-black text-2xl">Market</div>
      </Link>
      <div className="flex items-center gap-2">
        <Link href={"/product"}>
          <div className="text-neutral-600 hover:text-black text-sm">Products</div>
        </Link>
        <Link href={"/product/new"}>
          <PlusIcon size={22} className="rounded-3xl  p-1 bg-neutral-100 hover:bg-neutral-200"/>
        </Link>
      </div>
      <UserButton />
    </nav>
  );
}

export default HomeNavbar;
