import { useLocation } from "react-router-dom"

export default function Submit()
{
    let response = useLocation().state;
    return(
        <>
            <p style={{margin:"auto"}}>{response['response']}</p>
        </>
    )
}