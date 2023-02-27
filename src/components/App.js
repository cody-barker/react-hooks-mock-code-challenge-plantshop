import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plantList, setPlantList] = useState([])
  const [search, setSearch] = useState("")

  const filteredPlants = plantList.filter(plant => {
    if (search === "") {
      return plant
    } else if (plant.name.toLowerCase().includes(search)) {
      return plant
    }
  })

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(plants => setPlantList(plants))
  },[])

  return (
    <div className="app">
      <Header />
      <PlantPage plantList={plantList} setPlantList={setPlantList} setSearch={setSearch} filteredPlants={filteredPlants}/>
    </div>
  );
}

export default App;

/**
 * App
 *    Header
 *    Plant Page
 *      New Plant Form
 *      Search
 *      Plant List
 *         Plant Card
 */


//on page load, render all of the plant cards
//create a state variable for the db plant list
//pass the plantList variable down to plantpage, then to plant list, then to plant card