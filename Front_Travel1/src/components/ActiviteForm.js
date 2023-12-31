// src/components/ActiviteForm.js
import React, { useState } from "react";
import ActiviteService from "../services/ActiviteService";

const ActiviteForm = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [lieu, setLieu] = useState("");

  const handleSave = () => {
    ActiviteService.saveActivite({ nom, description, lieu })
      .then((data) => console.log("Activity saved:", data))
      .catch((error) => console.error("Error saving activity:", error));
  };

  return (
    <div>
      <h1>Add Activity</h1>
      <form>
        <label>
          Name:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={lieu} onChange={(e) => setLieu(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ActiviteForm;
