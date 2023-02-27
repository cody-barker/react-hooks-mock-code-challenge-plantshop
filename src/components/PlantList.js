import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, filteredPlants}) {

  const cardComps = filteredPlants.map(plant => <PlantCard plant={plant} key={plant.id}/>)

  return (
    <ul className="cards">{cardComps}</ul>
  );
}

export default PlantList;
