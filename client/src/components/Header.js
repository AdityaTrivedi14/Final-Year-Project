import { IconButton } from "@material-ui/core";
import React from "react";
import "../css/Header.css";
import Logo from "../assets/logo1.svg";
import Avatar from "@material-ui/core/Avatar";
import avatarimage from "../assets/2.jpg";

function Header() {
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
      <div className="header_right">
        <IconButton>
          <Avatar style={{ height: "30px", width: "30px" }} src={avatarimage} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
