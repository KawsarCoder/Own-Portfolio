// import Navbar from "../Pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import ProgressBar from "../Pages/ProgressBar/ProgressBar";
import Navbar from "../Nabvar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ProgressBar />
    </div>
  );
};

export default Layout;
