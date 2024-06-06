import { currentUser } from "@clerk/nextjs/server";
import UserProducts from "./products/UserProducts";
import UserIdeas from "./ideas/UserIdeas";

async function Userpage() {
  const user = await currentUser();
  return (
    <div className="mx-4 md:mx-40 lg:mx-60 mt-10 md:mt-20 flex flex-col gap-4">
      <div className="flex flex-col">
        <UserProducts
          email={user?.primaryEmailAddress?.emailAddress as string}
        />
        <UserIdeas email={user?.primaryEmailAddress?.emailAddress as string} />
        <div className="min-h-60"></div>
      </div>
    </div>
  );
}

export default Userpage;
