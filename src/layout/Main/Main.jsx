import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar/Sidebar";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";

const Main = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
