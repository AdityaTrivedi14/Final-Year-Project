import React, { useContext } from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo1.svg";
import Logout from "../assets/logout.svg";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  //   const Rendernav = () => {
  //     if (state) {
  //       return (
  //         <>
  //           <div>
  //             <NavLink to="/logout">
  //               <span>Logout</span>
  //               <img src={Logout} style={{}} className="logout" />
  //             </NavLink>
  //           </div>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <div>
  //             <NavLink to="/login">Login</NavLink>
  //           </div>
  //           <div>
  //             <NavLink to="/signup">Signup</NavLink>
  //           </div>
  //         </>
  //       );
  //     }
  //   };

  return (
    <div className="header">
      <div className="header_info">
        <img
          src={Logo}
          alt="OEXP"
          style={{ height: "40px", width: "40px" }}
          className="form_image"
        />
      </div>
      <div className="titleHeading">Online Examination Portal</div>

      <div className="header_right">{/* <Rendernav /> */}</div>
    </div>
  );
};

export default Navbar;
