import React from "react";
import Person from "./Person";

const List = ({filtered, persons, setPersons}) => {
  
  return (
    <div>
          {filtered.length === 0 || filtered.length === persons.length ?
            
            <>
            <h3>Added Persons</h3>
            {persons.map(person =>
              <Person key = {person.id} person = {person} persons = {persons} setPersons = {setPersons}/>  
            )}
            </>
          :
            <>
            <h3>Filtered Persons</h3>
            {filtered.map(person =>
              <Person key = {person.id} person = {person} persons = {persons} setPersons = {setPersons}/>
            )}
            </>
            
          }
     
    </div>
  )
}

export default List
