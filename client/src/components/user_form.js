import { Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "../css/user_form.css";
import { useStateValue } from "../StateProvider";

import axios from "axios";
function User_form() {
  var quest = [];
  var post_answer = [];
  var navigate = useNavigate();

  var [answer, setAnswer] = useState([]);
  var [{ questions, doc_name, doc_desc }, dispatch] = useStateValue();

  function select(que, option) {
    // answer.map((ele)=>{
    //     ele.question==que ? ele.answer = option : console.log(" ")
    // })

    var k = answer.findIndex((ele) => ele.question == que);

    answer[k].answer = option;
    setAnswer(answer);
    console.log(answer);
  }

  useEffect(() => {
    questions.map((q) => {
      answer.push({
        question: q.questionText,
        answer: " ",
      });
    });
    questions.map((q, qindex) => {
      quest.push({ header: q.questionText, key: q.questionText });
    });
    console.log(answer);
  }, []);

  var post_answer_data = {};

  function selectinput(que, option) {
    var k = answer.findIndex((ele) => ele.question == que);

    answer[k].answer = option;
    setAnswer(answer);
    console.log(answer);
  }

  function selectcheck(e, que, option) {
    var d = [];
    var k = answer.findIndex((ele) => ele.question == que);
    if (answer[k].answer) {
      d = answer[k].answer.split(",");
    }

    if (e == true) {
      d.push(option);
    } else {
      var n = d.findIndex((el) => el.option == option);
      d.splice(n, 1);
    }

    answer[k].answer = d.join(",");

    setAnswer(answer);
    console.log(answer);
  }

  function submit() {
    answer.map((ele) => {
      post_answer_data[ele.question] = ele.answer;
    });

    axios.post(`http://localhost:9000/student_response/${doc_name}`, {
      column: quest,
      answer_data: [post_answer_data],
    });

    navigate(`/submitted`);
  }
  return (
    <div className="submit">
      <div className="user_form">
        <div className="user_form_section">
          <div className="user_title_section">
            <Typography style={{ fontSize: "26px" }}>{doc_name}</Typography>
            <Typography style={{ fontSize: "15px" }}>{doc_desc}</Typography>
          </div>

          {questions.map((question, qindex) => (
            <div className="user_form_questions">
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {qindex + 1}. {question.questionText}
              </Typography>
              {question.options.map((ques, index) => (
                <div key={index} style={{ marginBottom: "5px" }}>
                  <div style={{ display: "flex" }}>
                    <div className="form-check">
                      {question.questionType != "radio" ? (
                        question.questionType != "text" ? (
                          <label>
                            <input
                              type={question.questionType}
                              name={qindex}
                              value={ques.optionText}
                              className="form-check-input"
                              required={question.required}
                              style={{ margnLeft: "5px", marginRight: "5px" }}
                              onChange={(e) => {
                                selectcheck(
                                  e.target.checked,
                                  question.questionText,
                                  ques.optionText
                                );
                              }}
                            />{" "}
                            {ques.optionText}
                          </label>
                        ) : (
                          <label>
                            <input
                              type={question.questionType}
                              name={qindex}
                              value={ques.optionText}
                              className="form-check-input"
                              required={question.required}
                              style={{ margnLeft: "5px", marginRight: "5px" }}
                              onChange={(e) => {
                                selectinput(
                                  question.questionText,
                                  e.target.value
                                );
                              }}
                            />{" "}
                            {ques.optionText}
                          </label>
                        )
                      ) : (
                        <label>
                          <input
                            type={question.questionType}
                            name={qindex}
                            value={ques.optionText}
                            className="form-check-input"
                            required={question.required}
                            style={{ margnLeft: "5px", marginRight: "5px" }}
                            onChange={() => {
                              select(question.questionText, ques.optionText);
                            }}
                          />
                          {ques.optionText}
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="user_form_submit">
            <Button
              variant="contained"
              color="primary"
              onClick={submit}
              style={{ fontSize: "14px" }}
            >
              Submit
            </Button>
          </div>

          <div className="user_footer">OEXP</div>
        </div>
      </div>
    </div>
  );
}

export default User_form;
