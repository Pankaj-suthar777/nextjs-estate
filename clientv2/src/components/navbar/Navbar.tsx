// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// //import { AuthContext } from "../../context/AuthContext";

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   // const { currentUser } = useContext(AuthContext);

//   //if (currentUser) fetch();

//   return (
//     <nav className="h-20 flex justify-between items-center">
//       <div className="left flex-3 flex items-center gap-8">
//         <Link to="/" className="logo flex items-center font-bold text-xl">
//           <img src="/logo.png" alt="" className="w-7" />
//           <span className="hidden md:inline">LamaEstate</span>
//         </Link>
//         <Link to="/" className="hidden sm:inline-block">
//           Home
//         </Link>
//         <Link to="/" className="hidden sm:inline-block">
//           About
//         </Link>
//         <Link to="/" className="hidden sm:inline-block">
//           Contact
//         </Link>
//         <Link to="/" className="hidden sm:inline-block">
//           Agents
//         </Link>
//       </div>
//       <div className="right flex-2 flex items-center justify-end bg-fcf5f3 h-full">
//         {currentUser ? (
//           <div className="user flex items-center font-bold">
//             <img
//               src={currentUser.avatar || "/noavatar.jpg"}
//               alt=""
//               className="w-10 h-10 rounded-full object-cover mr-5"
//             />
//             <span className="hidden sm:inline">{currentUser.username}</span>
//             <Link
//               to="/profile"
//               className="profile px-6 py-3 bg-fece51 cursor-pointer relative"
//             >
//               <span>Profile</span>
//               <span className="notification absolute top-0 right-0 bg-red-500 text-white w-10 h-10 flex items-center justify-center">
//                 1
//               </span>
//             </Link>
//           </div>
//         ) : (
//           <>
//             <Link to="/login" className="mr-5">
//               Sign in
//             </Link>
//             <Link to="/register" className="register px-6 py-3 bg-fece51">
//               Sign up
//             </Link>
//           </>
//         )}
//         <div
//           className="menuIcon block z-50 sm:hidden"
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           <img src="/menu.png" alt="" className="w-9 h-9 cursor-pointer" />
//         </div>
//         <div
//           className={`${
//             open ? "block" : "hidden"
//           } menu absolute top-0 right-0 bg-black text-white h-screen w-1/2 transition-all duration-1000 flex flex-col items-center justify-center text-3xl`}
//         >
//           <Link to="/" className="hidden sm:block">
//             Home
//           </Link>
//           <Link to="/" className="hidden sm:block">
//             About
//           </Link>
//           <Link to="/" className="hidden sm:block">
//             Contact
//           </Link>
//           <Link to="/" className="hidden sm:block">
//             Agents
//           </Link>
//           <Link to="/login" className="block sm:hidden">
//             Sign in
//           </Link>
//           <Link to="/register" className="block sm:hidden">
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-20 flex justify-between items-center">
      <div className="left flex-3 flex items-center gap-12">
        <Link
          to="/"
          className="logo flex items-center font-bold gap-x-2 mr-6 text-xl"
        >
          <img src="/logo.png" alt="" className="w-7" />
          <span className="hidden md:inline">Logo</span>
        </Link>
        <Link to="/" className="hidden sm:inline-block">
          Home
        </Link>
        <Link to="/" className="hidden sm:inline-block">
          About
        </Link>
        <Link to="/" className="hidden sm:inline-block">
          Contact
        </Link>
        <Link to="/" className="hidden sm:inline-block">
          Agents
        </Link>
      </div>
      <div className="right flex-2 flex items-center justify-end bg-fcf5f3 h-full">
        <Link
          to="/login"
          className="px-6 py-2 min-w-[120px] text-center text-white bg-[#fece51] border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
        >
          Sign in
        </Link>
        <div className=" block z-50 sm:hidden" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="" className="w-9 h-9 cursor-pointer " />
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } menu absolute top-0 right-0 bg-black text-white h-screen w-1/2 transition-all duration-1000 flex flex-col items-center justify-center text-3xl`}
        >
          <Link to="/" className="hidden sm:block">
            Home
          </Link>
          <Link to="/" className="hidden sm:block">
            About
          </Link>
          <Link to="/" className="hidden sm:block">
            Contact
          </Link>
          <Link to="/" className="hidden sm:block">
            Agents
          </Link>
          <Link to="/login" className="block sm:hidden">
            Sign in
          </Link>
          <a
            className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
            href="/download"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
