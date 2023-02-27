import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList, setPlantList, setSearch, filteredPlants}) {
  return (
    <main>
      <NewPlantForm plantList={plantList} setPlantList={setPlantList}/>
      <Search setSearch={setSearch}/>
      <PlantList plantList={plantList} filteredPlants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
