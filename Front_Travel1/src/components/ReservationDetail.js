// src/components/ReservationDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReservationService from "../services/ReservationService";

const ReservationDetail = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    ReservationService.getReservationById(id)
      .then((data) => setReservation(data))
      .catch((error) => console.error("Error fetching reservation details:", error));
  }, [id]);

  if (!reservation) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Reservation ID: {reservation.id}</h1>
      <p>Date: {reservation.date}</p>
      <Link to="/reservations">Back to Reservations</Link>
    </div>
  );
};

export default ReservationDetail;
