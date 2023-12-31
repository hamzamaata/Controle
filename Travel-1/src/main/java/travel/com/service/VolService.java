package travel.com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import travel.com.entities.Vol;
import travel.com.repository.VolRepository;

@Service
public class VolService {

    @Autowired
    private VolRepository volRepository;

    public List<Vol> getAllVols() {
        return volRepository.findAll();
    }

    public Optional<Vol> getVolById(Long id) {
        return volRepository.findById(id);
    }

    public Vol saveVol(Vol vol) {
        return volRepository.save(vol);
    }

    public void deleteVol(Long id) {
        volRepository.deleteById(id);
    }
}