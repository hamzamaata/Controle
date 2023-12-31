package travel.com.entities;


import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String adresse;
    private int nombreChambres;

    @OneToMany(mappedBy = "hotel")
    private List<Reservation> reservations;
    @ManyToOne
    private Hotel hotel;
 
 
 
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public int getNombreChambres() {
		return nombreChambres;
	}
	public void setNombreChambres(int nombreChambres) {
		this.nombreChambres = nombreChambres;
	}

    // Getters and setters
}