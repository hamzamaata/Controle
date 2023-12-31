package travel.com.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Vol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numVol;

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumVol() {
		return numVol;
	}

	public void setNumVol(String numVol) {
		this.numVol = numVol;
	}

	public CompagnieAerienne getCompagnie() {
		return compagnie;
	}

	public void setCompagnie(CompagnieAerienne compagnie) {
		this.compagnie = compagnie;
	}

	public int getPlacesDispo() {
		return placesDispo;
	}

	public void setPlacesDispo(int placesDispo) {
		this.placesDispo = placesDispo;
	}

	@ManyToOne
    @JoinColumn(name = "compagnie_id")
    private CompagnieAerienne compagnie;

    private int placesDispo;

	public Object getNom() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setNom(Object nom) {
		// TODO Auto-generated method stub
		
	}

    // Getters and Setters
}