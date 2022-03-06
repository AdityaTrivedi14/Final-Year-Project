import React, { useState, useEffect } from "react";
import "../css/Templates.css";
import blank from "../assets/blank.svg";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import axios from "axios";

import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
function Templates() {
  const navigate = useNavigate();

  function createform() {
    var create_form_id = uuid();
    console.log(create_form_id);

    navigate("/form/" + create_form_id);
    var questions_list = [
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ];

    axios.post(`http://localhost:9000/add_questions/${create_form_id}`, {
      document_name: "untitled_form",
      doc_desc: "Add Description",
      questions: questions_list,
    });
  }
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <p style={{ color: "#e5ffcc", fontSize: "18px" }}>Start a new form</p>
        </div>
      </div>
      <div className="template_body">
        <div className="card" onClick={createform}>
          <img src={blank} className="card_image" style={{}} />
          <p className="title">Blank</p>
        </div>
      </div>
    </div>
  );
}

export default Templates;
