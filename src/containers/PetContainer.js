import { useState, useEffect } from 'react';
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";
import "./PetContainer.css";

const PetContainer = () => {

    const [pets, setPets] = useState([]);

    const postPet = async (newPet) => {   
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPet)
        })
        const savedPet = await response.json();
        setPets([...pets, savedPet])
    }

    const deletePet = async (id) => {
        // delete from db
        await fetch("http://localhost:8080/pets/" + id, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        // delete locally
        setPets(pets.filter(pet => pet.id !== id))
    }

    useEffect(() => {                   
        const fetchPets = async () => {
            const response = await fetch("http://localhost:8080/pets");
            const data = await response.json();
            setPets(data);
        }
        fetchPets();
    }, [])

    return (
        <div className='container'>
        <h1>Hello from BNTA Pets!</h1>
        <p><em>A resource for pet lovers</em></p>
        <PetForm postPet={postPet}/> 
        <PetList
            pets = {pets}
            deletePet = {deletePet} />
        </div>
    );
}

export default PetContainer;