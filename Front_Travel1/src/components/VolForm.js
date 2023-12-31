// src/components/VolForm.js
import React, { useState } from "react";
import VolService from "../services/VolService";

const VolForm = () => {
  const [name, setName] = useState("");

  const handleSave = () => {
    VolService.saveVol({ name })
      .then((data) => console.log("Flight saved:", data))
      .catch((error) => console.error("Error saving flight:", error));
  };

  return (
    <div>
      <h1>Add Flight</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default VolForm;
