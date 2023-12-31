// src/services/ActiviteService.js
const apiUrl = "http://localhost:8081/api/activites"; // Replace with your actual backend URL

const getAllActivites = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

const getActiviteById = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  return response.json();
};

const saveActivite = async (activite) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activite),
  });
  return response.json();
};

const deleteActivite = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export { getAllActivites, getActiviteById, saveActivite, deleteActivite };
