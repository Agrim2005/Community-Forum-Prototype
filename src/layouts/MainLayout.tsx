import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "@/components/layout";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;