import { useEffect, useState  } from "react";
import { BrowserRouter as Router,Route,useParams } from "react-router-dom";
import { useFetchPlayerQuery } from "../PuppyBowlApi";
import { useNavigate } from "react-router-dom";

const SinglePlayer= ()=>{
    const navigate=useNavigate();
    
    const { id } = useParams();
    const { data = {}, error, isLoading } = useFetchPlayerQuery(id);
    console.log(data)
    let message;
  console.log(data)
  if (isLoading) {
    return <p className="cent">Loading Pup...</p>;
  }

  if (error) {
    console.log(error);
    return <p className="cent">Something went wrong, please try again!</p>;
  }
    return (
<div className="Singleplayer-details">
<img
              className="singlePlayer-image"
              src={data.data.player.imageUrl}
              
              
            />
            <h2> {data.data.player.name}</h2>
            <p>{data.data.player.breed}</p>
            <p>{data.data.player.status}</p>
            <p>{data.data.player.team.name}</p>
            <p>{data.data.player.team.id}</p>
            <button class="details" onClick={() => {
                navigate(`/`);
              }}>Return</button>
            
</div>
            )
    }


export default SinglePlayer;