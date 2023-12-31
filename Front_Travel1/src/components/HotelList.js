// src/components/HotelList.js
import React, { useEffect, useState } from "react";
import HotelService from "../services/HotelService";
import { Link } from "react-router-dom";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    HotelService.getAllHotels()
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  return (
    <div>
      <h1>Hotels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <Link to={`/hotels/${hotel.id}`}>{hotel.nom}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
