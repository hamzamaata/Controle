// src/services/VolService.js
const apiUrl = "http://localhost:8081/api/vols"; // Replace with your actual backend URL

const getAllVols = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

const getVolById = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  return response.json();
};

const saveVol = async (vol) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vol),
  });
  return response.json();
};

const deleteVol = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export { getAllVols, getVolById, saveVol, deleteVol };