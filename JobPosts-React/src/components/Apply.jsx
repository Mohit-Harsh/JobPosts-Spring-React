import { useState } from "react";
import * as React from 'react';
import close from '../assets/icons8-close-100.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Markdown from "react-markdown";
import styles from './Apply.module.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Apply()
{
    let data = useLocation().state;

    const navigate = useNavigate();
    
    let [skills,setSkills] = useState([]);

    const [marktext,setMarkText] = useState("");

    const [type,setType] = useState("");

    function handleChange(event)
    {
        setType(event.target.value);
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
        new_application["email"] = document.getElementById("email").value;
        new_application["name"] = document.getElementById("name").value;
        new_application["type"] = type;
        new_application["skills"] = skills.slice();
        new_application['profile'] = document.getElementById(styles.profile).value;
        new_application['location'] = document.getElementById('city').value + ", " + document.getElementById('state').value + ", " + document.getElementById('country').value;
        new_application['phone'] = document.getElementById('phone').value;

        let response = await axios.post(`http://localhost:8080/post/${data['pid']}/apply`,new_application);

        navigate("submit", {state:{"response":response.data}});
    }

    return(
        <>
                <div className="row" style={{width:"50%",padding:"0vw 5vw", margin:"auto"}}>
                    <div className="col" style={{fontSize:"1vw",display:"block",height:"fit-content",padding:"1vw",backgroundColor:"white", boxShadow:"0px 4px 8px 2px rgb(230,230,230",borderRadius:"0.5vw", border:"none", marginTop:"2vw", marginBottom:"2vw"}}>
                        <div className="row" style={{margin:"2vw",display:"flex",justifyContent:'center',alignItems:'center'}}>
                            <h3 style={{width:'fit-content',fontSize:"1.5vw",fontWeight:"700",margin:"0",textAlign:"start",padding:0,fontFamily: "'Roboto', sans-serif", color:'rgb(0,0,0,0.75)', marginRight:'1vw'}}>Job Post</h3>
                        </div>
                        <div className="row" style={{margin:"1vw"}}>
                            <TextField id="email" label="Email Address" variant="outlined" inputProps={{ maxLength: 64 }}/>
                        </div>
                        <div className="row" style={{display:"flex",margin:"2vw 1vw 1vw 1vw"}}>
                            <div className="col-8" style={{margin:0,padding:"0 1vw 0 0"}}>
                                <TextField id="name" label="Name" variant="outlined" sx={{width:"100%"}} inputProps={{ maxLength: 30 }}/>
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
                                <div key={"div2"+s+k} style={{display:"flex",backgroundColor:"rgb(0,130,255)",color:"white",border:"none",borderRadius:"2vw",width:"fit-content",height:"fit-content",justifyContent:"center",alignItems:"center",padding:"0.5vw 1vw",margin:"0.2vw"}}>
                                    <span key={"span2"+s+k} style={{height:"fit-content",width:"fit-content",fontSize:"0.7vw",fontFamily:"'Roboto', san-serif",padding:"0",margin:"0"}}>{s}</span>
                                    <button onClick={() => removeSkill(s)} key={"button2"+s+k} style={{height:"fit-content",width:"fit-content",padding:"0",backgroundColor:"transparent",border:"none",margin:"0 0 0 0.3vw",display:"flex",alignItems:"center",justifyContent:"center"}}> <img src={close} alt="" style={{height:"0.8vw"}}/> </button>
                                </div>
                                
                            </>)}
                        </div>
                        <div className="row" style={{margin:"1vw", padding:0}}>

                            <div className="col-8" style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"0",padding:0}}>
                                <TextField id="skill" label="Skill" variant="outlined" sx={{width:"100%"}} inputProps={{ maxLength: 20 }}/>
                            </div>
                            <div className="col-4" style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"0",padding:0}}>
                                <Button variant="contained" onClick={addSkill} sx={{display:"flex",height:"fit-content",width:"fit-content",fontSize:"1vw",backgroundColor:"rgb(0,130,255)"}}>Add skill</Button>
                            </div>
                        
                        </div>
                        <div className="row" style={{display:"flex",margin:"2vw 1vw"}}>
                            <div className="col-6" style={{margin:0,padding:"0 1vw 0 0"}}>
                                <TextField id="experience" label="Experience (Years)" variant="outlined" style={{width:"100%"}}/>
                            </div>
                            <div className="col-6" style={{margin:0,padding:0}}>
                                <TextField id="phone" label="Phone Number" variant="outlined" inputProps={{maxLength:10}} style={{width:"100%"}}/>
                            </div>
                        </div>
                        <div className="row" style={{display:"flex",margin:"2vw 1vw"}}>
                            <div className="col-4" style={{margin:0, padding:"0"}}>
                                <TextField id="city" label="City" variant="outlined" style={{width:"100%"}}/>
                            </div>
                            <div className="col-4" style={{margin:0, padding:"0 1vw"}}>
                                <TextField id="state" label="State" variant="outlined" style={{width:"100%"}}/>
                            </div>
                            <div className="col-4" style={{margin:0, padding:0}}>
                                <TextField id="country" label="Country" variant="outlined" style={{width:"100%"}}/> 
                            </div>
                        </div>
                        <div className="row" style={{display:"block",margin:"2vw 1vw"}}>
                            <textarea placeholder="Profile" name="" id={styles.profile} cols="20" rows="10" style={{width:"100%",border:"1px solid rgb(0,0,0,0.3)", borderRadius:"0.3vw",backgroundColor:"transparent",padding:"1vw"}}></textarea>
                        </div>
                        <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"2vw"}}>
                            <Button variant="contained" onClick={handleSubmit} sx={{display:"flex",height:"fit-content",width:"fit-content",fontSize:"1vw",backgroundColor:"rgb(0,130,255)"}}>Submit</Button>
                        </div>
                    </div>
                    
                </div>
        </>
    )
}