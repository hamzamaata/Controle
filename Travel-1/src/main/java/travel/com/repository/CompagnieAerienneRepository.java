package travel.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import travel.com.entities.CompagnieAerienne;

public interface CompagnieAerienneRepository extends JpaRepository<CompagnieAerienne, Long> {
}