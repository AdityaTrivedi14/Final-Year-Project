import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Formheader from "./components/Formheader";
import Header from "./components/Header";
import SubmitForm from "./components/QuestionPaper";
import CenteredTabs from "./components/Tabs";
import Templates from "./components/Templates";
import User_form from "./components/user_form";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { initialState, reducer } from "./reducer/useReducer";

export const UserContext = createContext();

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            exact
            path="/form/:id"
            element={
              <>
                <Formheader /> <CenteredTabs />
              </>
            }
          />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/response" element={<User_form />} />
          <Route exact path="/submitted" element={<SubmitForm />} />

          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Templates />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
