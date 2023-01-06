const CountryInfo = (props) => {
  const { country } = props
  const keys = Object.keys(country.languages)

  return (
    <div>
      <h1>{country.name.common}</h1>
      <span>capital {country.capital}</span><br></br>
      <span>area {country.area}</span><br></br>
      <br></br>
      <span><b>languages:</b></span><br></br>
      <ul>
        {keys.map(key => <li key={key}>{`${country.languages[key]}`}</li>)}
      </ul>
      <img src={`${country.flags.png}`} alt={"flag"} width="250"></img>
    </div>
  )
}

const Countries = (props) => {
  const { countries, filterSearch } = props

  if (filterSearch.trim().length !== 0) {
    const search = countries.filter(country => country.name.common.toLowerCase().includes(filterSearch.toLowerCase()))

    if (search.length >= 2 && search.length <= 10) {
      return (
        <div>
          {search.map(country => <span key={country.name.common}>{`${country.name.common}`}<br></br></span>)}
        </div>
      )
    } else if (search.length === 1) {
      console.log(search[0])
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
