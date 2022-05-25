
const Country = ({filter}) => {
  const country = filter[0]
  return(<div>
    <h2>{country.name.common}</h2>
    <p><b>Capital: </b>{country.capital[0]}</p>
    <p><b>Population: </b>{country.population} habs</p>
    <h3>Languages</h3>
    <ul>
      {Object.values(country.languages).map(language =>
        <li key = {language}>{language}</li>
      )}
    </ul>
    <div>
      <img alt = 'country-flag' src={country.flags['png']}></img>
    </div>
  </div>)
}

export default Country