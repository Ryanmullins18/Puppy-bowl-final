import React from "react";
import { useFetchPlayersQuery } from "../PuppyBowlApi";
import { useNavigate } from "react-router-dom";

const Players = () => {
  const navigate=useNavigate();
  const { data = {}, error, isLoading } = useFetchPlayersQuery();
  let message;
  console.log(data)
  if (isLoading) {
    return <p className="cent">Loading Pups...</p>;
  }

  if (error) {
    console.log(error);
    return <p className="cent">Something went wrong, please try again!</p>;
  }
  return (
    
    <div className="players">
      {data.data.players.map((player) => (
        <div key={player.id} className="player-card">
          <div className="player-image-container">
            <img
              className="player-image"
              src={player["imageUrl"]}
              alt={player["name"]}
              
            />
          </div>
          <div className="player-details">
            <h2> {player["name"]} </h2>
            
            <p> {player["breed"]} </p>

            <p> {player["status"]} </p>
            <button id="details" onClick={() => {
                navigate(`/players/${player.id}`);
              }}>Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players
