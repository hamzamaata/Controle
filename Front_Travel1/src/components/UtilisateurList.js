// UtilisateurList.js
import React, { useEffect, useState } from "react";
import UtilisateurService from "../services/UtilisateurService";

const UtilisateurList = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    UtilisateurService.getAllUtilisateurs()
      .then((data) => setUtilisateurs(data))
      .catch((error) => console.error("Error fetching utilisateurs:", error));
  }, []);

  return (
    <div>
      <h1>Utilisateurs</h1>
      <ul>
        {utilisateurs.map((utilisateur) => (
          <li key={utilisateur.id}>{utilisateur.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default UtilisateurList;
