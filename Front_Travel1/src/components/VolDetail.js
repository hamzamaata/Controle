// src/components/VolDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import VolService from "../services/VolService";

const VolDetail = () => {
  const { id } = useParams();
  const [vol, setVol] = useState(null);

  useEffect(() => {
    VolService.getVolById(id)
      .then((data) => setVol(data))
      .catch((error) => console.error("Error fetching flight details:", error));
  }, [id]);

  if (!vol) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Flight ID: {vol.id}</h1>
      <p>Name: {vol.name}</p>
      <Link to="/vols">Back to Flights</Link>
    </div>
  );
};

export default VolDetail;
