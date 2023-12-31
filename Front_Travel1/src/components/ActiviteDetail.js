// src/components/ActiviteDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ActiviteService from "../services/ActiviteService";

const ActiviteDetail = () => {
  const { id } = useParams();
  const [activite, setActivite] = useState(null);

  useEffect(() => {
    ActiviteService.getActiviteById(id)
      .then((data) => setActivite(data))
      .catch((error) => console.error("Error fetching activity details:", error));
  }, [id]);

  if (!activite) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Activity ID: {activite.id}</h1>
      <p>Name: {activite.nom}</p>
      <p>Description: {activite.description}</p>
      <p>Location: {activite.lieu}</p>
      <Link to="/activites">Back to Activities</Link>
    </div>
  );
};

export default ActiviteDetail;
