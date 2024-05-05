import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

function Page() {
  const { userId } = auth();
  if (userId) redirect("/home");
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp path="/signup" signInUrl="/signin" forceRedirectUrl={"/home"} />
    </div>
  );
}

export default Page;
