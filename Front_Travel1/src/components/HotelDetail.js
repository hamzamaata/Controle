// src/components/HotelDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import HotelService from "../services/HotelService";

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    HotelService.getHotelById(id)
      .then((data) => setHotel(data))
      .catch((error) => console.error("Error fetching hotel details:", error));
  }, [id]);

  if (!hotel) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Hotel ID: {hotel.id}</h1>
      <p>Name: {hotel.nom}</p>
      <p>Address: {hotel.adresse}</p>
      <p>Number of Rooms: {hotel.nombreChambres}</p>
      <Link to="/hotels">Back to Hotels</Link>
    </div>
  );
};

export default HotelDetail;
