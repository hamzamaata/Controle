// src/services/UtilisateurService.js
const apiUrl = "http://localhost:8081/api/utilisateurs";

const getAllUtilisateurs = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

const getUtilisateurById = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  return response.json();
};

const saveUtilisateur = async (utilisateur) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(utilisateur),
  });
  return response.json();
};

const deleteUtilisateur = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export { getAllUtilisateurs, getUtilisateurById, saveUtilisateur, deleteUtilisateur };
