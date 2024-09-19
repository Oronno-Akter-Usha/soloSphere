import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outer */}
      <Outlet />
      {/* Footer */}
    </div>
  );
};

export default Main;
