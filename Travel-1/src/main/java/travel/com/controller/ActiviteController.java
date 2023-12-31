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

import travel.com.entities.Activite;
import travel.com.service.ActiviteService;

@RestController
@RequestMapping("/api/activites")
public class ActiviteController {

    @Autowired
    private ActiviteService activiteService;

    @GetMapping
    public List<Activite> getAllActivites() {
        return activiteService.getAllActivites();
    }

    @GetMapping("/{id}")
    public Optional<Activite> getActiviteById(@PathVariable Long id) {
        return activiteService.getActiviteById(id);
    }

    @PostMapping
    public Activite saveActivite(@RequestBody Activite activite) {
        return activiteService.saveActivite(activite);
    }

    @DeleteMapping("/{id}")
    public void deleteActivite(@PathVariable Long id) {
        activiteService.deleteActivite(id);
    }
}