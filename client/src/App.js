
import React from 'react';
//import {BrowserRouter as Router ,Switch, Route} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formheader from './Formheader';
import Header from "./Header"
import Mainbody from './Mainbody';
import SubmitForm from './QuestionPaper';
import Question_form from './Question_form';
import CenteredTabs from './Tabs';
import Templates from './Templates';
import User_form from './user_form';




function App() {
  return (
    <div className="app">
         <Router>
         <Routes>
           
                   
           <Route exact path="/form/:id" element={ <><Formheader />  <CenteredTabs /></>}/>
                 
              

              <Route exact path="/response" element={<User_form />}/>
                 
              

              <Route exact path="/submitted" element={<SubmitForm />}/>
                 
              

                 
              
              <Route exact path="/" element={<><Header /><Templates /><Mainbody /></>}/>
                
              
        
              </Routes> 
         </Router>

    </div>
  );
}

export default App;
