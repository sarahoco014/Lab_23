import Pet from "./Pet"
import "./PetList.css"

const PetList = ({pets, deletePet}) => {

    const petsComponents = pets.map(pet => {   
        return <Pet 
                key={pet.id} 
                pet={pet}
                deletePet={deletePet} />
    })

    return (
        <div className="pet-list">
          <h3>List of Pets</h3>
          <hr />
          <div className="pet-card-container">
            {petsComponents}
          </div>
        </div>
      );
}

export default PetList;