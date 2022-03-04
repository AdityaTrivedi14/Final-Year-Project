import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

import {BiEnvelope} from "react-icons/bi"
import {FiLink2} from "react-icons/fi"
import {BsCode,BsPersonPlus} from  "react-icons/bs"
import {AiFillFacebook,AiFillTwitterSquare} from "react-icons/ai"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import {GrClose} from "react-icons/gr"
import "./Alert.css"

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    
    maxWidth: 100,
  },
  tab:{
    fontSize:20,
    color:"#5f6368",
    textTransform:"capitalize",
    height:7,
   
    fontWeight:"600",
    fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
    minWidth: 70, // a number of your choice
        width: 70,
  },
  tabs:{
      height:7,
      
      
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        
          <div>{children}</div>
   
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (

  
  
    <div>
      

      
              
      <Button variant="contained" color="primary" href="#contained-buttons" onClick={handleClickOpen}>Send</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" className="dialog"  aria-describedby="alert-dialog-description">
       
           <div className="dialog_content">
             <div className="dialog_title">
               <div >Send form</div>  <GrClose onClick={handleClose} style={{fontSize:"15px",cursor:"pointer"}}/>
             </div>
             <br></br>
             <div style={{fontSize:"14px",fontWeight:"800px",display:"flex",flexDirection:"row",alignItems:"center"}}>
             
               <input type="checkbox" style={{marginRight:"10px"}}/> Collect email addresses
             </div>
             <div className="dialog_row">
                 <div className="dialog_row_in">
                 <span style={{fontSize:"13px",fontWeight:"500",width:"70px"}}>Send via</span>
             
                
                      <Tabs value={value}  onChange={handleChange}  indicatorColor="primary"  textColor="primary"  className={classes.tabs}>
                        <Tab label={    <BiEnvelope />} className={classes.tab} size="small" {...a11yProps(0)} />
                        <Tab label={    <FiLink2/>} className={classes.tab} {...a11yProps(1)}/>
                        <Tab label={    <BsCode/>} className={classes.tab} {...a11yProps(2)}/>
                      </Tabs>
                  </div>    
                      <div className="dialog_row_end">
                <AiFillFacebook style={{fontSize:"20px"}} /><AiFillTwitterSquare style={{fontSize:"20px"}}/>
                </div>
             </div>

             <div className="dialog_tab_panels">
              <TabPanel value={value} index={0}>
                <div style={{  display:"flex",flexDirection:"column",marginTop:"20px",marginBottom:"20px"}}>
                <div className="tab_text" style={{marginBottom:"8px",fontWeight:"400"}}>Email</div>
              
                <TextField label="To" id="margin-none" defaultValue="To" style={{fontSize:"12px",marginBottom:"55px"}} />
                <TextField label="Subject" id="margin-none" size="small"  defaultValue="Untitled" style={{fontSize:"12px",marginBottom:"25px"}} />
                <TextField label="Message" id="margin-none" size="small"  defaultValue="I have invited you to fill the form" style={{fontSize:"12px",marginBottom:"10px"}} />
                <div style={{fontSize:"14px",fontWeight:"800px",display:"flex",flexDirection:"row",alignItems:"center"}}>
             
             <input type="checkbox" style={{marginRight:"10px"}}/> Included form in Email
           </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
              <div className="tab_two" style={{  display:"flex",flexDirection:"column",marginTop:"20px",marginBottom:"20px"}}>
                  <div className="tab_text" style={{marginBottom:"8px"}}>Link</div>
              
                  <input type="text" className="tab_input" />
                  <div style={{fontSize:"14px",fontWeight:"800px",display:"flex",flexDirection:"row",alignItems:"center"}}>
             
                    <input type="checkbox" style={{marginRight:"10px"}}/> Shorten URL
                  </div>
              </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
              <div className="tab_two" style={{  display:"flex",flexDirection:"column",marginTop:"20px",marginBottom:"20px"}}>
                  <div className="tab_text" style={{marginBottom:"8px"}}>Embed HTML</div>
              
                  <input type="text" className="tab_input" />
                
              </div>
              </TabPanel>
             </div>

             <div className="dialog_footer">
              <div className="dialog_footer_left" style={{textTransform: 'none',color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>
                <BsPersonPlus style={{fontSize:"20px",marginRight:"10px"}}/> Add collaborators
              </div>
              <div className="dialog_footer_left">
              <Button variant="outlined" color="primary" size="small" onClick={handleClose}className="dialog_button">cancel</Button>

              <Button variant="outlined" size="small" color="primary" onClick={handleClose} style={{marginLeft:"10px",color:"rgb(103, 58, 183)",fontFamily: "'Google Sans',Roboto,Arial,sans-serif",fontSize:"14px",fontweight: "500"}}>send</Button>
              </div>
            </div>
           </div>
       
  
      </Dialog>
    </div>
  );
}
