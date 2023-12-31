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

import travel.com.entities.CompagnieAerienne;
import travel.com.service.CompagnieAerienneService;

@RestController
@RequestMapping("/api/compagnies-aeriennes")
public class CompagnieAerienneController {

    @Autowired
    private CompagnieAerienneService compagnieAerienneService;

    @GetMapping
    public List<CompagnieAerienne> getAllCompagniesAeriennes() {
        return compagnieAerienneService.getAllCompagniesAeriennes();
    }

    @GetMapping("/{id}")
    public Optional<CompagnieAerienne> getCompagnieAerienneById(@PathVariable Long id) {
        return compagnieAerienneService.getCompagnieAerienneById(id);
    }

    @PostMapping
    public CompagnieAerienne saveCompagnieAerienne(@RequestBody CompagnieAerienne compagnieAerienne) {
        return compagnieAerienneService.saveCompagnieAerienne(compagnieAerienne);
    }

    @DeleteMapping("/{id}")
    public void deleteCompagnieAerienne(@PathVariable Long id) {
        compagnieAerienneService.deleteCompagnieAerienne(id);
    }
}