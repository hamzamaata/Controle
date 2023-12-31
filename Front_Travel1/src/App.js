// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UtilisateurList from "./components/UtilisateurList";
import UtilisateurDetail from "./components/UtilisateurDetail";
import UtilisateurForm from "./components/UtilisateurForm";
import VolList from "./components/VolList";
import VolDetail from "./components/VolDetail";
import VolForm from "./components/VolForm";
import HotelList from "./components/HotelList";
import HotelDetail from "./components/HotelDetail";
import HotelForm from "./components/HotelForm";
import ReservationList from "./components/ReservationList";
import ReservationDetail from "./components/ReservationDetail";
import ReservationForm from "./components/ReservationForm";
import ActiviteList from "./components/ActiviteList";
import ActiviteDetail from "./components/ActiviteDetail";
import ActiviteForm from "./components/ActiviteForm";
import CompagnieAerienneList from "./components/CompagnieAerienneList";
import CompagnieAerienneDetail from "./components/CompagnieAerienneDetail";
import CompagnieAerienneForm from "./components/CompagnieAerienneForm";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Utilisateur Routes */}
          <Route path="/utilisateurs/:id" component={UtilisateurDetail} />
          <Route path="/utilisateurs/new" component={UtilisateurForm} />
          <Route path="/utilisateurs" component={UtilisateurList} />

          {/* Vol Routes */}
          <Route path="/vols/:id" component={VolDetail} />
          <Route path="/vols/new" component={VolForm} />
          <Route path="/vols" component={VolList} />

          {/* Hotel Routes */}
          <Route path="/hotels/:id" component={HotelDetail} />
          <Route path="/hotels/new" component={HotelForm} />
          <Route path="/hotels" component={HotelList} />

          {/* Reservation Routes */}
          <Route path="/reservations/:id" component={ReservationDetail} />
          <Route path="/reservations/new" component={ReservationForm} />
          <Route path="/reservations" component={ReservationList} />

          {/* Activite Routes */}
          <Route path="/activites/:id" component={ActiviteDetail} />
          <Route path="/activites/new" component={ActiviteForm} />
          <Route path="/activites" component={ActiviteList} />

          {/* CompagnieAerienne Routes */}
          <Route path="/compagnies-aeriennes/:id" component={CompagnieAerienneDetail} />
          <Route path="/compagnies-aeriennes/new" component={CompagnieAerienneForm} />
          <Route path="/compagnies-aeriennes" component={CompagnieAerienneList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
