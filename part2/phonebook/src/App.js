import './App.css';
import {useState, useEffect} from 'react';
import List from './components/List';
import Create from './components/Create';
import Filter from './components/Filter';
import services from './services/phonebook';

function App() {

  const [persons, setPersons] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    services.getAll()
      .then(response => {
        const {data} = response;
        setPersons(data)
      })
  }, [])
  
  return (
    <>
      <Filter persons = {persons} setFiltered = {setFiltered}/>
      <Create persons = {persons} setPersons = {setPersons} />
      <List filtered = {filtered} persons = {persons} setPersons = {setPersons}/>
    </>
  );
}

export default App;
