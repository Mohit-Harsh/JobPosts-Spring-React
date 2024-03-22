import React from "react"
import styles from './HomePage.module.css'
import search from '../../assets/icons8-search-96.png'
import JobCard from '../JobCard/JobCard.jsx'

export default function HomePage()
{
    let posts = [{"date":"20 May, 2024","company":"Microsoft","title":"DevOps Engineer","skills":["Linux","Docker","Kubernetes","Azure Cloud"],"salary":"Rs. 25 LPA","location":"Hyderabad, India"},
                   {"date":"23 May, 2024","company":"Amazon","title":"Amazon SDE - II","skills":["DSA","Problem Solving","Coding","AWS Solution Architect"],"salary":"Rs. 30 LPA","location":"Hyderabad, India"},
                   {"date":"18 May, 2024","company":"Jp Morgan","title":"Software Engineer II","skills":["Microservices","DevOps","Problem Solving","Cloud Computing"],"salary":"Rs. 22.5 LPA","location":"Hyderabad, India"},
                   {"date":"21 May, 2024","company":"Amazon","title":"Amazon SDE I","skills":["Microservices","Problem Solving","AWS Solution Architect"],"salary":"Rs. 17.5 LPA","location":"Hyderabad, India"}]

    function handleSearch(event)
    {
        console.log("search clicked");
    }

    return(
        <>
            
            <div className="container-fluid">

                <nav className="navbar">
                    <div className="container-fluid" style={{height:"fit-content",padding:"1vw",display:"flex",justifyContent:"start",alignItems:"center"}}>
                        <h1 id={styles.h1} style={{margin: "0"}}>Jobposts</h1>
                        <input type="text" id={styles.search} />
                        <button type="submit" id={styles.submit}><img src={search} alt="" style={{height:"1.5vw",width:"auto"}} onClick={handleSearch}/></button>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={styles.dropdown}>
                                Location
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={styles.dropdown}>
                                Experience
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={styles.dropdown}>
                                Job Type
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid" style={{margin:"1vw 1vw",}}>
                    {/* <div className="row" style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                        <h3 id={styles.h3} style={{display:"flex"}}>Recommended jobs</h3>
                    </div> */}
                    <div className="row" style={{marginTop:"1vw"}}>
                        <div className="row" style={{display:"flex",overflowWrap:"anywhere",justifyContent:"start",alignItems:"center"}}>
                            {posts.map((post,key) => <JobCard post={post} k={key}></JobCard>)}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}