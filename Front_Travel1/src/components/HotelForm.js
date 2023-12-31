// src/components/HotelForm.js
import React, { useState } from "react";
import HotelService from "../services/HotelService";

const HotelForm = () => {
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [nombreChambres, setNombreChambres] = useState(0);

  const handleSave = () => {
    HotelService.saveHotel({ nom, adresse, nombreChambres })
      .then((data) => console.log("Hotel saved:", data))
      .catch((error) => console.error("Error saving hotel:", error));
  };

  return (
    <div>
      <h1>Add Hotel</h1>
      <form>
        <label>
          Name:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
        </label>
        <br />
        <label>
          Number of Rooms:
          <input type="number" value={nombreChambres} onChange={(e) => setNombreChambres(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
