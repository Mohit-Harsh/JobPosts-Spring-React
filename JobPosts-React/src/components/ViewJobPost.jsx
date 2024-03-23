import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import salary from '../assets/icons8-salary-96.png';
import date from '../assets/icons8-date-96.png';
import jobtype from '../assets/icons8-briefcase-96.png';
import exp from '../assets/icons8-bulb-96.png';
import ext from '../assets/icons8-external-link-96.png';
import { Link } from "react-router-dom";

export default function ViewJobPost()
{
    const data = useLocation().state;

    console.log(data);

    return(
        <>
            <div className="container" style={{fontFamily:"'Roboto' sans-serif",margin:"4vw auto",backgroundColor:"white",border:"none",boxShadow:"0px 4px 8px 2px rgb(230,230,230)",padding:"0", height:"fit-content", width:"40vw", borderRadius:"0.5vw"}}>
                <div className="row" style={{padding:"2vw 2vw 0 2vw", height:"fit-content"}}>

                    <div className="col-6">
                        <p style={{fontSize:"0.85vw", fontWeight:"500",margin:'0.3vw 0'}}>
                            {data['company']}
                        </p>
                        <h3 style={{fontSize:"2vw"}}>
                            {data['title']}
                        </h3>
                        <p style={{fontSize:"1vw"}}>{data['location']}</p>
                        <Link to={`apply`} state={data}><button style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",margin:"3vw 2vw 0 0",fontSize:"0.8vw",border:"none",borderRadius:"0.6vw", width:"fit-content", height:"fit-content", padding:"0.5vw 0.7vw", backgroundColor:"rgb(0,130,255)", color:"white", boxShadow:"0px 4px 8px 2px rgb(230,230,230"}}>Apply <img src={ext} style={{height:"1vw",width:"auto",padding:"0 0.2vw"}}/></button></Link>
                    </div>
                    <div className="col-6" style={{padding:"0vw 2vw"}}>
                        <div className="row" style={{display:'flex',justifyContent:"start",alignItems:"center", marginTop:"1vw"}}>
                            <span style={{width:"fit-content"}}><img src={date} alt="" style={{height:"1.5vw",width:"auto"}}/></span>
                            <span style={{width:"fit-content", fontSize:"1vw"}}>{data['date']}</span>
                        </div>
                        <div className="row" style={{display:'flex',justifyContent:"start",alignItems:"center", marginTop:"1vw"}}>
                            <span style={{width:"fit-content"}}><img src={jobtype} alt="" style={{height:"1.5vw",width:"auto"}}/></span>
                            <span style={{width:"fit-content", fontSize:"1vw"}}>{data['type']}</span>
                        </div>
                        <div className="row" style={{display:'flex',justifyContent:"start",alignItems:"center", marginTop:"1vw"}}>
                            <span style={{width:"fit-content"}}><img src={exp} alt="" style={{height:"1.5vw",width:"auto"}}/></span>
                            <span style={{width:"fit-content", fontSize:"1vw"}}>{data['exp']}+ years experience</span>
                        </div>
                        <div className="row" style={{display:'flex',justifyContent:"start",alignItems:"center", marginTop:"1vw"}}>
                            <span style={{width:"fit-content"}}><img src={salary} alt="" style={{height:"1.5vw",width:"auto"}}/></span>
                            <span style={{width:"fit-content", fontSize:"1vw"}}>Rs. {data['salary']} LPA</span>
                        </div>
                    </div>
                    
                </div>
                <hr style={{margin:"2vw 1vw 1vw 1vw"}}/>
                <div className="row" style={{padding:"1vw 2.5vw"}}>
                    <p style={{fontSize:"1vw", fontWeight:"500",margin:'1vw 0 1vw 0.3vw',padding:0}}>
                        Skills
                    </p>
                    {data['skills'].map((s,k) => 
                        <>
                            <div key={"div"+s+k} style={{display:"flex",backgroundColor:"transparent",border:"1px solid rgb(38,38,38)",color:"rgb(38,38,38)",borderRadius:"2vw",width:"fit-content",height:"fit-content",justifyContent:"center",alignItems:"center",padding:"0.5vw 1vw",margin:"0.2vw"}}>
                                <span key={"span"+s+k} style={{height:"fit-content",width:"fit-content",fontSize:"0.7vw",padding:"0",margin:"0"}}>{s}</span>
                            </div> 
                        </>
                    )}
                </div>
                <hr style={{margin:"2vw 1vw 1vw 1vw"}}/>
                <div style={{padding:"1vw 2.5vw",fontSize:"0.85vw"}}>
                    <Markdown>{data['jobdetails']}</Markdown>
                </div>
            </div>
        </>
    )
}