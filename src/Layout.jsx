import { Outlet } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      {/* Layout */}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
