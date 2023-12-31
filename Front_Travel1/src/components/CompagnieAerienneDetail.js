// src/components/CompagnieAerienneDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CompagnieAerienneService from "../services/CompagnieAerienneService";

const CompagnieAerienneDetail = () => {
  const { id } = useParams();
  const [compagnieAerienne, setCompagnieAerienne] = useState(null);

  useEffect(() => {
    CompagnieAerienneService.getCompagnieAerienneById(id)
      .then((data) => setCompagnieAerienne(data))
      .catch((error) => console.error("Error fetching airline details:", error));
  }, [id]);

  if (!compagnieAerienne) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Airline ID: {compagnieAerienne.id}</h1>
      <p>Name: {compagnieAerienne.nom}</p>
      <p>Code: {compagnieAerienne.code}</p>
      <Link to="/compagnies-aeriennes">Back to Airlines</Link>
    </div>
  );
};

export default CompagnieAerienneDetail;
