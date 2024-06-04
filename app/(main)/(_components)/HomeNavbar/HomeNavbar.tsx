import { UserButton } from "@clerk/nextjs";
import { Link } from "next-view-transitions";
import { Package, PlusIcon } from "lucide-react";
import { Roboto } from "next/font/google";
import UserTooltip from "./UserTooltip";
import Cart from "./Cart";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
function HomeNavbar() {
  return (
    <nav className="flex items-center justify-around py-4 bg-[#0171dc]">
      <Link href={"/home"}>
        <div className="font-bold text-3xl text-yellow-500">
          <span className={roboto.className}>Market</span>
        </div>
      </Link>
      <div className="flex gap-8 text-yellow-500">
        <div className="flex items-center gap-2">
          <Link href={"/product"}>
            <div className="font-semibold hover:text-yellow-600 text-sm">
              Products
            </div>
          </Link>
          <Link href={"/product/new"}>
            <PlusIcon
              size={22}
              className="rounded-3xl p-1 transition-colors bg-yellow-400 hover:bg-blue-500 text-blue-500 hover:text-yellow-400"
            />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href={"/idea"}>
            <div className="font-semibold hover:text-yellow-600 text-sm">
              Ideas
            </div>
          </Link>
          <Link href={"/idea/new"}>
            <PlusIcon
              size={22}
              className="rounded-3xl p-1 hover:transition-colors bg-yellow-400 hover:bg-blue-500 text-blue-500 hover:text-yellow-400"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-4 md:gap-8 items-center text-yellow-500">
        <Cart />
        <Link href={"/user"}>
          <UserTooltip />
        </Link>
        <UserButton />
      </div>
    </nav>
  );
}

export default HomeNavbar;
