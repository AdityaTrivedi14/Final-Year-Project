import React from "react";
import logo from "./Group1.svg";
import { AiOutlineEye } from "react-icons/ai";
import { IconButton } from "@material-ui/core";
import avatarimage from "./2.jpg";
// import { IoMdFolderOpen } from "react-icons/io";

// import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import "./Formheader.css";
import { useNavigate } from "react-router-dom";
// import { useStateValue } from "./StateProvider";
import AlertDialog from "./Alert";

function Formheader() {
  const navigate = useNavigate();
  // const [{ doc_name }, dispatch] = useStateValue();

  function navigates() {
    navigate("/response");
  }

  return (
    <div className="form_header">
      <div className="form_header_left">
        <img alt="OEXP" src={logo} style={{ height: "40px", width: "40px" }} />
      </div>

      <div className="form_header_right">
        <IconButton onClick={navigates} target="blank">
          <AiOutlineEye className="form_header_icon" />
        </IconButton>

        <AlertDialog />

        {/* <Button variant="contained" color="primary" href="#contained-buttons">Send</Button> */}

        <IconButton>
          <Avatar style={{ height: "30px", width: "30px" }} src={avatarimage} />
        </IconButton>
      </div>
    </div>
  );
}

export default Formheader;
