import React from "react"
import bookmark from '../../assets/icons8-bookmark-96.png'
import styles from './JobCard.module.css';
import Markdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { render } from "react-dom";

export default function JobCard({post,k})
{

    let colors = ["rgb(255,225,204)","rgb(212,246,237)","rgb(227,219,250)","rgb(236,239,244)","rgb(212,246,237)"];

    return(
        <>
            <div className="container" id={styles.container} style={{width:"17vw",height:"fit-content",padding:"0.3vw 1.4vw",borderRadius:"1.5vw",backgroundColor:"white",border:"1px solid rgb(0,0,0,0.3)",margin:"0.5vw",fontFamily: "'Roboto', sans-serif"}}>
                <div className="row" style={{backgroundColor:colors[k%5],height:"18vw",borderRadius:"1.2vw"}}>
                    <div className="row" style={{margin:"0 0 0 0", height:"3vw",padding:"1vw 0 0 0"}}>
                        <div className="col-8" style={{display: "flex",justifyContent: "start",padding:"0 0 0 0.8vw",alignItems:"center"}}>
                            <button style={{border:"transparent",borderRadius:"1vw",backgroundColor:"white",color:"rgb(0,0,0,0.8)",padding:"0.4vw 0.8vw",fontSize:"0.6vw",fontWeight:"700",height:"fit-content"}}>{post["date"]}</button>
                            <span style={{textAlign:"start",fontSize:"0.7vw",fontWeight:"500",marginBottom:"0",padding:0,marginLeft:"0.5vw"}}>{post["type"]}</span>
                        </div>
                        <div className="col-4" style={{display:"flex",justifyContent:"center",alignItems:"center",padding:0}}>
                            <button style={{display:"flex",border:"transparent",borderRadius:"2vw",backgroundColor:"white",padding:"0.5vw",alignItems:"center",justifyContent:"center"}}><img src={bookmark} alt="" style={{height:"1vw"}}/></button>
                        </div>
                    </div>
                    <div className="row" style={{display:"block",margin:"0 0 -2vw 0",height:"8vw",paddingTop:"1vw",paddingBottom:"1vw"}}>
                        <div className="col-8" style={{overflowWrap:"anywhere",padding:0,overflow:"hidden",height:"100%"}}>
                            <p style={{textAlign:"start",fontSize:"0.7vw",fontWeight:"500",marginBottom:"0",padding:0}}>{post["company"]}</p>
                            <h3 style={{fontSize:"1.5vw",fontWeight:"400",margin:"0",textAlign:"start",padding:0}}>{post["title"]}</h3>
                        </div>
                        <div className="col-4"></div>
                            
                        </div>
                    <div className="row" style={{display:"flex", margin:"0",padding:"0 1vw 0 0",height:"4vw"}}>
                        {(post['description'].length >= 150)?<p style={{fontSize:"0.7vw",fontFamily:"'Roboto' san-serif",height:"100%",width:"100%"}}>{post['description'].substring(0,150)+"..."}</p>:<p>{post['description']}</p>}
                    </div>
                </div>
                <div className="row" style={{padding:"1vw 0.8vw"}}>
                    <div className="col-7" style={{display:"block",textWrap:"balance"}}>
                        <h3 style={{fontSize:"0.8vw",fontWeight:"700",margin:"0",textAlign:"start"}}>Rs. {post["salary"]} LPA</h3>
                        <p style={{fontSize:"0.8vw",marginLeft:"auto",textAlign:"start",marginBottom:"0"}}>{post["location"]}</p>
                    </div>
                    <div className="col-5" style={{display:"flex",justifyContent:"center",alignItems:"center",padding:0}}>
                        <Link to={`view/${post['company']}/${post['title']}`} state={post}><button style={{padding:"0.5vw 1vw",backgroundColor:"rgb(0,0,0,0.85",color:"white",border:"transparent",borderRadius:"1vw",fontSize:"0.65vw"}}>Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}