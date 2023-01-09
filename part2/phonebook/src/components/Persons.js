const Person = (props) => {
  const { name, number } = props.person

  return (
    <p>{[name, ' ', number]}</p>
  )
}

const Persons = (props) => {
  const { persons, filterSearch } = props

  if (filterSearch.trim().length !== 0) {
    const search = persons.filter(person => person.name.toLowerCase().includes(filterSearch.toLowerCase()))

    if (search.length >= 1) {
      return (
        <div>
          {search.map(person => <Person key={person.name} person={person}/>)}
        </div>
      )
    } else {
      return (
        <p>No results</p>
      )
    }
  } else {
      return (
        <div>
          {persons.map(person => <Person key={person.name} person={person}/>)}
        </div>
      )
  }
}

export default Persons
