package travel.com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import travel.com.entities.Vol;
import travel.com.service.VolService;

@RestController
@RequestMapping("/api/vols")
public class VolController {

    @Autowired
    private VolService volService;

    @GetMapping
    public List<Vol> getAllVols() {
        return volService.getAllVols();
    }

    @GetMapping("/{id}")
    public Optional<Vol> getVolById(@PathVariable Long id) {
        return volService.getVolById(id);
    }

    @PostMapping
    public Vol saveVol(@RequestBody Vol vol) {
        return volService.saveVol(vol);
    }

    @DeleteMapping("/{id}")
    public void deleteVol(@PathVariable Long id) {
        volService.deleteVol(id);
    }
}
