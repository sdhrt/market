import { UserButton } from "@clerk/nextjs";
import { Link } from "next-view-transitions";
import { PlusIcon } from "lucide-react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
function HomeNavbar() {
  return (
    <nav className="flex items-center justify-around py-4">
      <Link href={"/home"}>
        <div className="font-bold text-3xl">
          <span className={roboto.className}>Market</span>
        </div>
      </Link>
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <Link href={"/product"}>
            <div className="text-neutral-600 hover:text-black text-sm">
              Products
            </div>
          </Link>
          <Link href={"/product/new"}>
            <PlusIcon
              size={22}
              className="rounded-3xl  p-1 bg-neutral-100 hover:bg-neutral-200"
            />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href={"/idea"}>
            <div className="text-neutral-600 hover:text-black text-sm">
              Ideas
            </div>
          </Link>
          <Link href={"/idea/new"}>
            <PlusIcon
              size={22}
              className="rounded-3xl  p-1 bg-neutral-100 hover:bg-neutral-200"
            />
          </Link>
        </div>
      </div>
      <UserButton />
    </nav>
  );
}

export default HomeNavbar;
