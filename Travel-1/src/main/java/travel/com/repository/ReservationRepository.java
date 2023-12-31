package travel.com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import travel.com.entities.Reservation;
import travel.com.entities.Utilisateur;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

	List<Reservation> findByUtilisateur(Utilisateur utilisateur);
}
