import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

async function Navbar() {
  const { userId } = auth();
  return (
    <div className="flex justify-between py-4 px-24">
      <div className="text-xl font-black">Market</div>
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
  );
}

export default Navbar;
