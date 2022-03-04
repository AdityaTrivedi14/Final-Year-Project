import React from 'react'
import "./Question_form.css"

import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ShortTextIcon from '@material-ui/icons/ShortText';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import SubjectIcon from '@material-ui/icons/Subject';
import BackupIcon from '@material-ui/icons/Backup';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {BsTrash} from "react-icons/bs"
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CenteredTabs from "./Tabs" 

import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function Question_form() {
    
    return (
        <div >
            <CenteredTabs />
        <div className="question_form">
     

            <br></br>
            <div className="section">
           
            <div className="question_title_section">

            
               <div className="question_form_top">
                   <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="Untitled form"  ></input>
                   <input type="text" className="question_form_top_desc" placeholder="Form Description" ></input>

               </div>
            </div>   
            
           
            <div className="saved_questions">

            
               <div className="question">
                  <p style={{ fontSize:"14px"}}>Questions</p>
               </div>
               <div clasName="options" style={{ fontSize:"14px"}}>
               <input type="radio" style={{marginLeft:"10px",marginRight:"10px"}}></input>
               <span>Options</span>
               </div>
            </div>   
            <div className="saved_questions">

            
               <div className="question">
                  <p style={{ fontSize:"14px"}}>Questions</p>
               </div>
               <div clasName="options" style={{ fontSize:"14px"}}>
               <input type="radio" style={{marginLeft:"10px",marginRight:"10px"}}></input>
               <span>Options</span>
               </div>
            </div>   
          
            
            <div className="question_boxes">
         
              
                <div className="add_question">
        
        <div className="add_question_top">
        <input type="text" className="question" placeholder="Question" ></input>
            <CropOriginalIcon style={{color:"#5f6368"}} />
            
                    <Select className="select" style={{color:"#5f6368",fontSize:"13px"}}>
                        <MenuItem value="90" className="menuitem"> <ShortTextIcon style={{marginRight:"10px"}} /> <span style={{marginBottom:"10px"}}>Short Paragraph</span></MenuItem>
                        <MenuItem value="100"> <SubjectIcon style={{marginRight:"10px"}} />  Paragraph</MenuItem>
                        
                        <MenuItem value={10}><RadioButtonCheckedIcon checked style={{marginRight:"10px", color:"#70757a"}}/> Multiple Choice</MenuItem>
                        <MenuItem value={20}><CheckBoxIcon style={{marginRight:"10px" ,color:"#70757a"}} checked /> Checkboxes</MenuItem>
                        <MenuItem value="30"> <ArrowDropDownCircleIcon style={{marginRight:"10px"}} /> Drop-down</MenuItem>
                        <MenuItem value="40"> <BackupIcon style={{marginRight:"10px"}} /> File Upload</MenuItem>
                        <MenuItem value="50"> <LinearScaleIcon style={{marginRight:"10px"}} /> Linear Scale</MenuItem>
                        <MenuItem value="60"> <AppsIcon style={{marginRight:"10px"}} /> Tick-box grid</MenuItem>


                        <MenuItem value="70"> <EventIcon style={{marginRight:"10px"}} /> Date</MenuItem>
                        <MenuItem value="80"> <ScheduleIcon style={{marginRight:"10px"}} /> Time</MenuItem>


                    </Select>
               
            
        </div>
        <div className="add_question_body">
           <Checkbox  color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} disabled/>
           <div className="text">
               <input type="text" className="text_input" placeholder="option"></input>
           </div>
           <CropOriginalIcon style={{color:"#5f6368"}}/>
            
        </div>
        <div className="add_question_body">
                          <Checkbox  color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} disabled/>

           <div >
               <input type="text" className="text_input" style={{fontSize:"13px",width:"100px",marginLeft:"10px",marginRight:"10px"}} placeholder="Add other"></input>
           </div>
           or
           <span style={{color:"#4285f4",fontSize:"13px",fontWeight:"600",marginLeft:"5px"}}>  Add Other</span>


            
        </div>


        <div className="add_question_bottom">

            <IconButton>
              <FilterNoneIcon/>
                
            </IconButton>
            <IconButton>
               <BsTrash />

            </IconButton>
            <span style={{color:"#5f6368",fontSize:"13px"}}>Required </span> <Switch name="checkedA" color="primary"/>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            
        </div>
          
       

     

                </div>
                <div className="question_edit">
                    <AddCircleOutlineIcon className="edit"/>
                    <OndemandVideoIcon className="edit"/>
                    <CropOriginalIcon className="edit"/>
                    <TextFieldsIcon className="edit"/>
             </div> 
             
{/* 

                */}



            </div>
            </div>
        </div>
        </div>
    )
}

export default Question_form
