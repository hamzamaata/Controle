// src/components/ReservationForm.js
import React, { useState } from "react";
import ReservationService from "../services/ReservationService";

const ReservationForm = () => {
  const [date, setDate] = useState("");

  const handleSave = () => {
    ReservationService.saveReservation({ date })
      .then((data) => console.log("Reservation saved:", data))
      .catch((error) => console.error("Error saving reservation:", error));
  };

  return (
    <div>
      <h1>Add Reservation</h1>
      <form>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
