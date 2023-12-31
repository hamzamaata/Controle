package travel.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import travel.com.entities.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
}
