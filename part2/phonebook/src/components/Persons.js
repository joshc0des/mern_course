import nameService from '../services/names'

const Person = (props) => {
  const { person, persons, setPersons } = props
  const { name, number, id } = person

  const removePerson = (id) => {
    if (window.confirm(`Delete ${name} ?`)) {
      nameService
        .remove(id)
        .then(
          setPersons(persons.filter((e) => e.id !== id))
        )
    }
  }


  return (
    <p>{[name, ' ', number, ' ']}
      <button
        value={name}
        onClick={()=>removePerson(id)}>
        Delete
      </button>
    </p>
  )
}

const Persons = (props) => {
  const { persons, filterSearch, setPersons} = props
  
  if (filterSearch.trim().length !== 0) {
    const search = persons.filter(person => person.name.toLowerCase().includes(filterSearch.toLowerCase()))

    if (search.length >= 1) {
      return (
        <div>
          {search.map(person => <Person key={person.name} person={person} persons={persons} setPersons={setPersons}/>)}
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
          {persons.map(person => <Person key={person.name} person={person} persons={persons} setPersons={setPersons}/>)}
        </div>
      )
  }
}

export default Persons
