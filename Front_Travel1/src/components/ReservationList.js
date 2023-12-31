// src/components/ReservationList.js
import React, { useEffect, useState } from "react";
import ReservationService from "../services/ReservationService";
import { Link } from "react-router-dom";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    ReservationService.getAllReservations()
      .then((data) => setReservations(data))
      .catch((error) => console.error("Error fetching reservations:", error));
  }, []);

  return (
    <div>
      <h1>Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <Link to={`/reservations/${reservation.id}`}>{reservation.date}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
