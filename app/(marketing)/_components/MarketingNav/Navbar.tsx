import { Roboto } from "next/font/google";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

async function Navbar() {
  const { userId } = auth();
  return (
    <div className="px-8 md:px-40">
      <div className="flex justify-between py-4">
        <div className="text-3xl font-bold">
          <span className={roboto.className}>Market</span>
        </div>
        {userId ? (
          <Link href={"/home"}>
            <div className="py-2 px-4 rounded-md border text-sm">Continue</div>
          </Link>
        ) : (
          <Link href={"/signin"}>
            <div className="py-2 px-4 rounded-md border text-sm">Sign In</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
