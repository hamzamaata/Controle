// src/services/ReservationService.js
const apiUrl = "http://localhost:8081/api/reservations"; // Replace with your actual backend URL

const getAllReservations = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

const getReservationById = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  return response.json();
};

const saveReservation = async (reservation) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservation),
  });
  return response.json();
};

const deleteReservation = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export { getAllReservations, getReservationById, saveReservation, deleteReservation };
