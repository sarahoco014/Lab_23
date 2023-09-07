import "./Pet.css"

const Pet = ({pet, deletePet}) => {

    const handleDeletePet = () => {  
        deletePet(pet.id);
    }

    return (
        <div className="pet-card">      
            <h4>{pet.name}</h4>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <button onClick={handleDeletePet}> Delete </button>
        </div>
    )
}

export default Pet;