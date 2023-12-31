package travel.com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import travel.com.entities.CompagnieAerienne;
import travel.com.repository.CompagnieAerienneRepository;

@Service
public class CompagnieAerienneService {

    @Autowired
    private CompagnieAerienneRepository compagnieAerienneRepository;

    public List<CompagnieAerienne> getAllCompagniesAeriennes() {
        return compagnieAerienneRepository.findAll();
    }

    public Optional<CompagnieAerienne> getCompagnieAerienneById(Long id) {
        return compagnieAerienneRepository.findById(id);
    }

    public CompagnieAerienne saveCompagnieAerienne(CompagnieAerienne compagnieAerienne) {
        return compagnieAerienneRepository.save(compagnieAerienne);
    }

    public void deleteCompagnieAerienne(Long id) {
        compagnieAerienneRepository.deleteById(id);
    }
}