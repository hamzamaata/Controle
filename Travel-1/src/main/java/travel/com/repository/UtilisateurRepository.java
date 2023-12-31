package travel.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import travel.com.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {

	Utilisateur findByEmail(String email);
}