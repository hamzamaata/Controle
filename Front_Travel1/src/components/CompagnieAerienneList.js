// src/components/CompagnieAerienneList.js
import React, { useEffect, useState } from "react";
import CompagnieAerienneService from "../services/CompagnieAerienneService";
import { Link } from "react-router-dom";

const CompagnieAerienneList = () => {
  const [compagniesAeriennes, setCompagniesAeriennes] = useState([]);

  useEffect(() => {
    CompagnieAerienneService.getAllCompagniesAeriennes()
      .then((data) => setCompagniesAeriennes(data))
      .catch((error) => console.error("Error fetching airlines:", error));
  }, []);

  return (
    <div>
      <h1>Airlines</h1>
      <ul>
        {compagniesAeriennes.map((compagnie) => (
          <li key={compagnie.id}>
            <Link to={`/compagnies-aeriennes/${compagnie.id}`}>{compagnie.nom}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompagnieAerienneList;
