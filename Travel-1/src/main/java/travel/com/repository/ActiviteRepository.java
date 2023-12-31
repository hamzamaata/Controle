package travel.com.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import travel.com.entities.Activite;
public interface ActiviteRepository extends JpaRepository<Activite, Long> {
}
