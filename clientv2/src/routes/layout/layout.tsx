import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";

function Layout() {
  return (
    <div className="h-screen max-w-[1466px] mx-auto lg:px-10 px-5 flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

// function RequireAuth() {
//   const { currentUser } = useContext(AuthContext);

//   return !currentUser ? (
//     <Navigate to="/login" />
//   ) : (
//     <div className="layout h-screen max-w-1366 mx-auto px-20 flex flex-col">
//       <div className="navbar">
//         <Navbar />
//       </div>
//       <div className="content flex-1">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

export { Layout };
