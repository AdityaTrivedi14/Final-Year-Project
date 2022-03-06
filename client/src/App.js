import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formheader from "./components/Formheader";
import Header from "./components/Header";
import SubmitForm from "./components/QuestionPaper";
import CenteredTabs from "./components/Tabs";
import Templates from "./components/Templates";
import User_form from "./components/user_form";

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
