import React, { useState } from "react";
import { useDeletePlayerMutation, useFetchPlayersQuery } from "../PuppyBowlApi";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Players = () => {
  const [players, setPlayer]=useState([])
  const [deletePlayer] = useDeletePlayerMutation();
  const [searchParameter, setSearchParameter] = useState("");
  const navigate=useNavigate();
  const { data = {}, error, isLoading } = useFetchPlayersQuery();
  console.log(data)

    
    
console.log(searchParameter)

  let message;
  
  if (isLoading) {
    return <p className="cent">Loading Pups...</p>;
  }

  if (error) {
    console.log(error);
    return <p className="cent">Something went wrong, please try again!</p>;
   
  }
  const filterData = searchParameter && data
  ? data.data.players.filter((player) =>
      player.name.toLowerCase().includes(searchParameter.toLowerCase())
      
    )
  : data.data.players;
  return (
    <section>
      <SearchBar
        searchParameter={searchParameter}
        setSearchParameter={setSearchParameter}
      />
      {isLoading && <p>{message}</p>}
      {error && <p>{message}</p>}
      {players &&
        players.map((player) => (
         <div>
            {player.name}
          </div>
        ))}
   

    <div className="players">
      {filterData.map((player) => (
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
               <button id="delete" onClick={() => {deletePlayer(player.id)
              }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Players
