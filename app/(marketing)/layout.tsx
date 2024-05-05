import Navbar from "./_components/MarketingNav/Navbar";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default MarketingLayout;
