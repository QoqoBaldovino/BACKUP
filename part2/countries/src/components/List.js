
const List = ({filter, setFilter}) => {
 const handleChange = (country) => {
    const aux = [country]
    setFilter(aux)
  }

  return (
    <div>
    {
      filter.map(country => 
        <div key = {country.name.common}>
          <p>{country.name.common} <button onClick={() => handleChange(country)}>Show</button></p>
        </div>
      )
    }
    </div>
  )
}

export default List