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
    <div className="px-8 md:px-40 bg-[#0171dc]">
      <div className="flex justify-between py-4">
        <div className="text-3xl font-bold text-yellow-400">
          <span className={roboto.className}>Market</span>
        </div>
        {userId ? (
          <Link href={"/home"}>
            <div className="py-2 px-4 rounded-md border border-yellow-400 text-sm text-white font-semibold hover:bg-blue-500">
              Continue
            </div>
          </Link>
        ) : (
          <Link href={"/signin"}>
            <div className="py-2 px-4 rounded-md border border-yellow-400 text-sm text-white font-semibold hover:bg-blue-500">
              Sign In
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
