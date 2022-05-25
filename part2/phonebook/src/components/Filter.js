import React, {useState, useEffect} from 'react';


const Filter = ({persons, setFiltered}) => {
  
  const [search, setSearch] = useState('')

  useEffect(() => {
    const filter = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
    setFiltered(filter)
  }, [search, persons, setFiltered])
  
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <h3>Filter Persons</h3>
      <input onChange ={handleChange} placeholder='Find a person...'></input>
    </>
  )
}

export default Filter