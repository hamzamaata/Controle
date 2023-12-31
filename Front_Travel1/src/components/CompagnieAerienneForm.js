// src/components/CompagnieAerienneForm.js
import React, { useState } from "react";
import CompagnieAerienneService from "../services/CompagnieAerienneService";

const CompagnieAerienneForm = () => {
  const [nom, setNom] = useState("");
  const [code, setCode] = useState("");

  const handleSave = () => {
    CompagnieAerienneService.saveCompagnieAerienne({ nom, code })
      .then((data) => console.log("Airline saved:", data))
      .catch((error) => console.error("Error saving airline:", error));
  };

  return (
    <div>
      <h1>Add Airline</h1>
      <form>
        <label>
          Name:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <br />
        <label>
          Code:
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default CompagnieAerienneForm;
