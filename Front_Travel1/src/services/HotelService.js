// src/services/HotelService.js
const apiUrl = "http://localhost:8081/api/hotels"; // Replace with your actual backend URL

const getAllHotels = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

const getHotelById = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  return response.json();
};

const saveHotel = async (hotel) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hotel),
  });
  return response.json();
};

const deleteHotel = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export { getAllHotels, getHotelById, saveHotel, deleteHotel };
