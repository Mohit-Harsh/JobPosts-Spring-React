import { useState } from "react";
import * as React from 'react';
import close from '../../assets/icons8-close-100.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Markdown from "react-markdown";
import {createRoot} from 'react-dom/client';
import styles from './CreatePage.module.css';
import axios from "axios";

export default function CreatePage()
{

    let [skills,setSkills] = useState([]);

    const [mark,setMark] = useState(false);
    const [marktext,setMarkText] = useState("");

    const [type,setType] = useState("");

    function handleChange(event)
    {
        setType(event.target.value);
    }

    function handleText()
    {
        setMark(false);
    }

    function handlePreview()
    {
        let des = document.getElementById(styles.jobdetails).value;
        console.log(des);
        setMarkText(des);
        setMark(true);
    }

    function addSkill()
    {
        let s = document.getElementById("skill").value;
        let new_arr = skills.slice();
        new_arr.push(s);
        console.log(new_arr);
        setSkills(new_arr);
    }

    function removeSkill(s)
    {
        let new_arr = skills.slice();
        let i = new_arr.indexOf(s);
        new_arr = new_arr.slice(0,i).concat(new_arr.slice(i+1));
        setSkills(new_arr);
    }

    async function handleSubmit()
    {
        let new_application = {};
        new_application["title"] = document.getElementById("title").value;
        new_application["company"] = document.getElementById("company").value;
        new_application["type"] = type;
        new_application["skills"] = skills.slice();
        new_application['jobdetails'] = marktext;
        new_application['location'] = document.getElementById('location').value;
        new_application['exp'] = document.getElementById('experience').value;
        new_application['salary'] = document.getElementById('salary').value;
        new_application['description'] = document.getElementById(styles.description).value;

        let response = await axios.post("http://localhost:8080/post/",new_application);

        console.log(response);
    }

    return(
        <>
                <div className="row" style={{width:"100%",padding:"0vw 5vw", margin:"0"}}>
                    <div className="col-4" style={{fontSize:"1vw",display:"block",height:"fit-content",padding:"1vw",backgroundColor:"white", boxShadow:"0px 4px 8px 2px rgb(230,230,230",borderRadius:"0.5vw", border:"none", marginTop:"2vw", marginBottom:"2vw"}}>
                        <div className="row" style={{margin:"2vw",display:"flex",justifyContent:'center',alignItems:'center'}}>
                            <h3 style={{width:'fit-content',fontSize:"1.5vw",fontWeight:"700",margin:"0",textAlign:"start",padding:0,fontFamily: "'Roboto', sans-serif", color:'rgb(0,0,0,0.75)', marginRight:'1vw'}}>Job Post</h3>
                        </div>
                        <div className="row" style={{margin:"1vw"}}>
                            <TextField id="title" label="Job Title" variant="outlined" inputProps={{ maxLength: 20 }}/>
                        </div>
                        <div className="row" style={{display:"flex",margin:"2vw 1vw 1vw 1vw"}}>
                            <div className="col-8" style={{margin:0,padding:0}}>
                                <TextField id="company" label="Company Name" variant="outlined" inputProps={{ maxLength: 20 }}/>
                            </div>
                            <div className="col-4" style={{margin:0,padding:0}}>
                            <FormControl fullWidth>
                                <InputLabel id="select-label">Job Type</InputLabel>
                                    <Select labelId="select-label" id="jobtype" value={type} label="Job Type" onChange={handleChange}>
                                        <MenuItem value="On-site">On-site</MenuItem>
                                        <MenuItem value="Remote">Remote</MenuItem>
                                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                                    </Select>
                            </FormControl>
                            </div>
                        </div>
                        <div className="row" style={{display:"flex", margin:"1vw"}}>
                            {skills.map((s,k) => 
                            <>
                                <div key={"div"+s+k} style={{display:"flex",backgroundColor:"rgb(38,38,38)",color:"white",border:"none",borderRadius:"2vw",width:"fit-content",height:"fit-content",justifyContent:"center",alignItems:"center",padding:"0.5vw 1vw",margin:"0.2vw"}}>
                                    <span key={"span"+s+k} style={{height:"fit-content",width:"fit-content",fontSize:"0.7vw",fontFamily:"'Roboto', san-serif",padding:"0",margin:"0"}}>{s}</span>
                                    <button onClick={() => removeSkill(s)} key={"button"+s+k} style={{height:"fit-content",width:"fit-content",padding:"0",backgroundColor:"transparent",border:"none",margin:"0 0 0 0.3vw",display:"flex",alignItems:"center",justifyContent:"center"}}> <img src={close} alt="" style={{height:"0.8vw"}}/> </button>
                                </div>
                                
                            </>)}
                        </div>
                        <div className="row" style={{margin:"1vw", padding:0}}>

                            <div className="col-8" style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"0",padding:0}}>
                                <TextField id="skill" label="Skill" variant="outlined" sx={{width:"100%"}} inputProps={{ maxLength: 20 }}/>
                            </div>
                            <div className="col-4" style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"0",padding:0}}>
                                <Button variant="contained" onClick={addSkill} sx={{display:"flex",height:"fit-content",width:"fit-content",fontSize:"1vw",backgroundColor:"rgb(30,30,30)"}}>Add skill</Button>
                            </div>
                        
                        </div>
                        <div className="row" style={{display:"flex",margin:"2vw 1vw"}}>
                            <div className="col-6" style={{margin:0,padding:"0 1vw 0 0"}}>
                                <TextField id="salary" label="Salary (LPA)" variant="outlined" />
                            </div>
                            <div className="col-6" style={{margin:0,padding:0}}>
                                <TextField id="experience" label="Experience (Years)" variant="outlined" />
                            </div>
                        </div>
                        <div className="row" style={{display:"flex",margin:"2vw 1vw"}}>
                            <TextField id="location" label="Location" variant="outlined" />
                        </div>
                        <div className="row" style={{display:"block",margin:"2vw 1vw"}}>
                            <textarea placeholder="Job Description" name="" id={styles.description} cols="20" rows="10" style={{width:"100%",border:"1px solid rgb(0,0,0,0.3)", borderRadius:"0.3vw",backgroundColor:"transparent",padding:"1vw"}}></textarea>
                        </div>
                        <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"2vw"}}>
                            <Button variant="contained" onClick={handleSubmit} sx={{display:"flex",height:"fit-content",width:"fit-content",fontSize:"1vw",backgroundColor:"rgb(30,30,30)"}}>Submit</Button>
                        </div>
                    </div>
                    <div className="col-8" style={{padding:"2vw 2vw 2vw 2vw"}}>
                        
                        <div className="container" style={{display:"block",height:"fit-content",backgroundColor:"white", boxShadow:"0px 4px 8px 2px rgb(230,230,230",borderRadius:"0.5vw", border:"none"}}>
                            <div className="row" style={{display:"flex",backgroundColor:"rgb(30,30,30)",color:"white",padding:"1vw", justifyContent:"start", alignItems:"center"}}>
                                
                                <h3 style={{color:"white",marginRight:"auto",fontSize:"1.2vw", fontWeight:"500",width:"fit-content"}}>Job Details</h3>
                                <button onClick={handleText} style={{backgroundColor:"transparent",color:"white",border:"none", height:"fit-content", width:"fit-content", fontSize:"0.8vw"}}>TEXT</button>
                                <button onClick={handlePreview} style={{backgroundColor:"transparent",color:"white",border:"none", height:"fit-content", width:"fit-content", fontSize:"0.8vw"}}>PREVIEW</button>
                                
                            </div>
                            <div style={{padding:"1vw",fontSize:"1vw"}}>
                                {(mark==false)?<>
                                <textarea name="textarea" cols="30" rows="15" id={styles.jobdetails} defaultValue={marktext} style={{width:"100%",border:"none",backgroundColor:"transparent"}}></textarea></>
                                :<>
                                    <Markdown>{marktext}</Markdown>
                                </>}
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </div>
        </>
    )
}