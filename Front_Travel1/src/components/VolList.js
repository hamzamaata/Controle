// src/components/VolList.js
import React, { useEffect, useState } from "react";
import VolService from "../services/VolService";
import { Link } from "react-router-dom";

const VolList = () => {
  const [vols, setVols] = useState([]);

  useEffect(() => {
    VolService.getAllVols()
      .then((data) => setVols(data))
      .catch((error) => console.error("Error fetching flights:", error));
  }, []);

  return (
    <div>
      <h1>Flights</h1>
      <ul>
        {vols.map((vol) => (
          <li key={vol.id}>
            <Link to={`/vols/${vol.id}`}>{vol.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolList;
