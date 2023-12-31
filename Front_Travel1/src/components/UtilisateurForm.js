// UtilisateurDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UtilisateurService from "../services/UtilisateurService";

const UtilisateurDetail = () => {
  const { id } = useParams();
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(() => {
    UtilisateurService.getUtilisateurById(id)
      .then((data) => setUtilisateur(data))
      .catch((error) => console.error("Error fetching utilisateur details:", error));
  }, [id]);

  if (!utilisateur) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{utilisateur.nom}</h1>
      <p>Email: {utilisateur.email}</p>
    </div>
  );
};

export default UtilisateurDetail;
