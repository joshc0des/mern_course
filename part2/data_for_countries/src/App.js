import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [filterSearch, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <span>find countries <Filter handleFilter={handleFilter} filterSearch={filterSearch}/><br /></span>
      <Countries countries={countries} filterSearch={filterSearch} setFilter={setFilter}/>
    </div>
  )
}

export default App
