// src/components/ActiviteList.js
import React, { useEffect, useState } from "react";
import ActiviteService from "../services/ActiviteService";
import { Link } from "react-router-dom";

const ActiviteList = () => {
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    ActiviteService.getAllActivites()
      .then((data) => setActivites(data))
      .catch((error) => console.error("Error fetching activities:", error));
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      <ul>
        {activites.map((activite) => (
          <li key={activite.id}>
            <Link to={`/activites/${activite.id}`}>{activite.nom}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiviteList;
