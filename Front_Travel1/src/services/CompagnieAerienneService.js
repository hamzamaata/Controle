// src/services/CompagnieAerienneService.js
const apiUrl = "http://localhost:8081/api/compagnies-aeriennes"; // Replace with your actual backend URL

const getAllCompagniesAeriennes = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

const getCompagnieAerienneById = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  return response.json();
};

const saveCompagnieAerienne = async (compagnieAerienne) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(compagnieAerienne),
  });
  return response.json();
};

const deleteCompagnieAerienne = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export { getAllCompagniesAeriennes, getCompagnieAerienneById, saveCompagnieAerienne, deleteCompagnieAerienne };
