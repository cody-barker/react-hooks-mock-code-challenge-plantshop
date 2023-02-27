import React, {useState} from "react";
import PlantList from "./PlantList";

function NewPlantForm({plantList, setPlantList}) {

  const [plantName, setPlantName] = useState("")
  const [plantImg, setPlantImg] = useState("")
  const [plantPrice, setPlantPrice] = useState("")

  function handleNameChange(e) {
    setPlantName(e.target.value)
  }

  function handleImgChange(e) {
    setPlantImg(e.target.value)
  }

  function handlePriceChange(e) {
    setPlantPrice(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newPlantObj = {
      name: plantName,
      image: plantImg,
      price: plantPrice
    }
   
    //console.log(newPlantObj)
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlantObj)
    })
    .then(resp => resp.json())
    .then(newPlant => setPlantList([...plantList, newPlant])
    )
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleImgChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handlePriceChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

//create a controlled form that submits a new plant to the db and renders it to the dom