import Weather from './Weather'

const Country = (props) => {
  const { country, setFilter } = props

  return (
    <div>
      <span>{country.name.common} 
        <button 
          value={country.name.common} 
          onClick={(e)=>setFilter(e.target.value)}>
            Show
        </button>
      </span>
      <br />
    </div>
  )
}

const CountryInfo = (props) => {
  const { country } = props
  const keys = Object.keys(country.languages)

  return (
    <div>
      <h1>{country.name.common}</h1>
      <span>capital {country.capital}</span><br/>
      <span>area {country.area}</span><br/>
      <br/>
      <span><b>languages:</b></span><br/>
      <ul>
        {keys.map(key => <li key={key}>{`${country.languages[key]}`}</li>)}
      </ul>
      <img src={`${country.flags.png}`} alt={"flag"} width="250"></img>
      <Weather country={country}/>
    </div>
  )
}

const Countries = (props) => {
  const { countries, filterSearch, setFilter } = props

  if (filterSearch.trim().length !== 0) {
    const search = countries.filter(country => country.name.common.toLowerCase().includes(filterSearch.toLowerCase()))

    if (search.length >= 2 && search.length <= 10) {
      return (
        <div>
          {search.map(country => <Country key={country.name.common} country={country} setFilter={setFilter}/>)}
        </div>
      )
    } else if (search.length === 1) {
      return (
        <CountryInfo country={search[0]}/>
      )
    } else if (search.length === 0){
      return (
        <span>No results</span>
      )
    } else {
      return (
        <span>Too many matches, specify another filter</span>
      )
    }
  } else {
      return (
        <span>Too many matches, specify another filter</span>
      )
  }
}

export default Countries
