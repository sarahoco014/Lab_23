import {useState} from 'react'; 
import "./PetForm.css"

const PetForm = ( {postPet} ) => {

    const [statePet, setStatePet] = useState(   // ADDED
        {
            name: "",
            type: "",
            breed: "",
            age: 0
        }
    )

    const handleChange = (event) => {       // ADDED
        let propertyName = event.target.name; // 'name' is the name of the target that triggered the event: 'name'/'cocoaPercentage'
        let copiedPet = {...statePet};
        copiedPet[propertyName] = event.target.value;
        setStatePet(copiedPet)
    }

    const handleFormSubmit = (event) => {   // ADDED
        event.preventDefault()
        postPet(statePet)
        setStatePet({
            name: "",
            type: "",
            breed: "",
            age: 0
        })
    }

    return(
        <div className="pet-form-container">
        <form onSubmit={handleFormSubmit}>
            <h3>Add a new pet</h3>
            
            <input 
                type="text"
                placeholder="Input pet name"
                onChange={handleChange}     
                name="name"                 
                value={statePet.name} /> 
                
            <input
                type="text"
                placeholder="Input pet type" />

            <input
                type="text"
                placeholder="Input pet breed"
                onChange={handleChange}    
                name="breed"      
                value={statePet.breed} />

            <input
                type="text"
                placeholder="Input pet age"
                onChange={handleChange}    
                name="age"      
                value={statePet.age} />
                
            
            <button type="submit">OK</button>      
        </form>
    </div>
    )
}

export default PetForm;