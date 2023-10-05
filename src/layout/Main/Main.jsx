import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="container" >
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>

        <div className="col-8">
          <Outlet />
        </div>

        <div className="col-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;
