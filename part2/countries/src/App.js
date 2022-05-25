import {useState, useEffect} from 'react'
import axios from 'axios';
import List from './components/List';
import Country from './components/Country'


function App() {

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
  
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const {data} = response
        setCountries(data)
      })
  
  }, [])

  useEffect(() => {
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    setFilter(filtered)
  }, [search, countries])

  return (
   <>
    <div>
      <h3>Find Countries</h3>
      <input value = {search} onChange = {handleChange} placeholder='Find Country...'></input>
     
     {
       filter.length === countries.length ? '' :
       (filter.length !== 1 ? <List filter = {filter} setFilter = {setFilter}/> : <Country filter = {filter} />)
       
     }
    </div>
   </>
  );
}

export default App;
