import React, { useEffect, useState } from "react";
import styles from './HomePage.module.css';
import search from '../../assets/icons8-search-96.png';
import JobCard from '../JobCard/JobCard.jsx';

import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage()
{
    let posts = [{"date":"20 May, 2024","company":"Microsoft","title":"DevOps Engineer","skills":["Linux","Docker","Kubernetes","Azure Cloud"],"salary":"Rs. 25 LPA","location":"Hyderabad, India","type":"On-site","description":"Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment."},
                   {"date":"23 May, 2024","company":"Amazon","title":"Amazon SDE - II","skills":["DSA","Problem Solving","Coding","AWS Solution Architect"],"salary":"Rs. 30 LPA","location":"Hyderabad, India","type":"Hybrid","description":"Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment."},
                   {"date":"18 May, 2024","company":"Jp Morgan","title":"Software Engineer II","skills":["Microservices","DevOps","Problem Solving","Cloud Computing"],"salary":"Rs. 22.5 LPA","location":"Hyderabad, India","type":"Remote","description":"Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment."},
                   {"date":"21 May, 2024","company":"Amazon","title":"Amazon SDE I","skills":["Microservices","Problem Solving","AWS Solution Architect"],"salary":"Rs. 17.5 LPA","location":"Hyderabad, India","type":"Hybrid","description":"Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment."}]
                  
    const [jobposts,setPosts] = useState([]);


    useEffect(() => {
        async function fetchdata(){
            const data = (await axios.get("http://localhost:8080/post/")).data;
            setPosts(data);
            console.log(data);
        }
        fetchdata();
    },[])

    async function handleSearch(event)
    {
        let text = document.getElementById(styles.search).value;
        let response = null
        if(text.length == 0)
        {
            response = await axios.get("http://localhost:8080/post/");
        }
        else
        {
            response = await axios.get(`http://localhost:8080/post/search/${text}`);
        }
        setPosts(response.data);
    }

    return(
        <>
            
            <div className="container-md" style={{margin:"1vw auto"}}>

                <nav className="navbar">
                    <div className="container-fluid" style={{height:"fit-content",padding:"1vw",display:"flex",justifyContent:"start",alignItems:"center"}}>
                        <h1 id={styles.h1} style={{margin: "0"}}>Jobposts</h1>
                        <input type="text" id={styles.search} />
                        <button type="submit" id={styles.submit}><img src={search} alt="" style={{height:"1.5vw",width:"auto"}} onClick={handleSearch}/></button>
                        <div className="dropdown" id={styles.dropdown}>
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={styles.dropbtn}>
                                Location
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div id={styles.vertical}></div>
                        <div className="dropdown" id={styles.dropdown}>
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={styles.dropbtn}>
                                Experience
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div id={styles.vertical}></div>
                        <div className="dropdown" id={styles.dropdown}>
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={styles.dropbtn}>
                                Job Type
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <Link to="create" style={{textDecoration:"none"}}><button id={styles.create}>Create Job</button></Link>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row" style={{marginTop:"1vw"}}>
                        <div className="row" style={{display:"flex",overflowWrap:"anywhere",justifyContent:"start",alignItems:"center"}}>
                            {jobposts.map((post,key) => <JobCard post={post} k={key}></JobCard>)}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}