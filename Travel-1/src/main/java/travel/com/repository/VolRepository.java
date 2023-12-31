package travel.com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import travel.com.entities.CompagnieAerienne;
import travel.com.entities.Vol;

public interface VolRepository extends JpaRepository<Vol, Long> {

	List<Vol> findByCompagnie(CompagnieAerienne compagnieAerienne);
}
