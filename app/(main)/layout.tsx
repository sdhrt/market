import { auth } from "@clerk/nextjs/server";
import HomeNavbar from "./(_components)/HomeNavbar/HomeNavbar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  auth().protect({ unauthorizedUrl: "/home", unauthenticatedUrl: "/" });
  return (
    <div>
      <HomeNavbar />
      {children}
    </div>
  );
}

export default HomeLayout;
