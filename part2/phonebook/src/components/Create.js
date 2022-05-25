import React, {useState} from 'react';
import services from '../services/phonebook';
import Notification from './Notification';

const Create = ({persons, setPersons}) => {

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [notification, setNotification] = useState({state: null, message: ''});
  

  const nameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const numberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const createPerson = (event) => {

    event.preventDefault();

    if(newName !== '' && newNumber !== ''){

      const exist = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())

      if(exist.length){

        if(window.confirm('Ya existe una persona con ese nombre. Quieres reemplazar el viejo numero por el nuevo?')){
          const updatePerson = {
            ...exist[0],
            number: newNumber
          }

          services.update(updatePerson.id, updatePerson)
            .then(updated => {
              const {data} = updated;
              setPersons(persons.map(person => person.id !== updatePerson.id ? person : data))
            }).catch(error => {
              setNotification({state: false, message: `${updatePerson.name} doesn't already exist!. Try adding it.`})
              setNewName('');
              setNewNumber('')
              setTimeout(() => {
               setNotification({state: null, message: ''})
               document.location.reload(true)
              }, 5000)
              
            }
              
            )

        }else{
          setNewName('');
          setNewNumber('')
        }

      }else{
        const newPerson = {
          name: newName,
          number: newNumber,
        }

        services.create(newPerson)
          .then(person => {
            const {data} = person;
            setPersons(persons.concat(data))
            setNotification({state: true, message: `${data.name} created!`})
            setTimeout(() => {
              setNotification({state: null, message: ''})
            }, 5000)
            setNewName('');
            setNewNumber('')
        })  
      }
      
    }else{
      alert('Ambos datos obligatorios!')
    }
  }

  return (
    <>
      <h3>Add Person</h3>
      <Notification notification={notification}/>
      <form onSubmit={createPerson}>
        <label>Name: </label>
        <input onChange={nameChange} value = {newName}></input><br/>
        <label>Number: </label>
        <input onChange={numberChange} value = {newNumber}></input><br/>
        <button>Add</button>
      </form>
    </>
  )
  
}

export default Create