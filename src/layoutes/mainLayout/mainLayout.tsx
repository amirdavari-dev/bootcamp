import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="px-5 s412:px-10 md:px-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
