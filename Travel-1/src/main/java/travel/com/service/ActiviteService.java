package travel.com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import travel.com.entities.Activite;
import travel.com.repository.ActiviteRepository;

@Service
public class ActiviteService {

    @Autowired
    private ActiviteRepository activiteRepository;

    public List<Activite> getAllActivites() {
        return activiteRepository.findAll();
    }

    public Optional<Activite> getActiviteById(Long id) {
        return activiteRepository.findById(id);
    }

    public Activite saveActivite(Activite activite) {
        return activiteRepository.save(activite);
    }

    public void deleteActivite(Long id) {
        activiteRepository.deleteById(id);
    }
}