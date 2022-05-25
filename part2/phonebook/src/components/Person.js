import React from 'react';
import services from '../services/phonebook';

const Person = ({person, persons, setPersons}) => {

  const handleDelete = () => {
    const deleted = person
    services.remove(deleted.id)
    setPersons(persons.filter(person => person.id !== deleted.id))
  }

  return(
    <div>
      <i>{person.name} {person.number} <button onClick={handleDelete}>Delete</button></i>

    </div>
  )
}

export default Person