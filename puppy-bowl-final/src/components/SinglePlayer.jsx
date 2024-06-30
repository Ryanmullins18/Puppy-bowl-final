import { useEffect, useState  } from "react";
import { BrowserRouter as Router,Route,useParams } from "react-router-dom";
import { useFetchPlayerQuery } from "../PuppyBowlApi";
import { useNavigate } from "react-router-dom";

const SinglePlayer= ()=>{
    const navigate=useNavigate();
    const { data = {}, error, isLoading } = useFetchPlayerQuery();
    const { id } = useParams();
    console.log(id)
    return (
<div className="player-details">
            <h2> {id} </h2>
            
</div>
            )
    }


export default SinglePlayer;