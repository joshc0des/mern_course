import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import nameService from './services/names'


const App = () => {
  const [persons, setPersons] = useState([])
  const [filterSearch, setNameFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  useEffect(() => {
    nameService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    let noDup = true
    persons.forEach(person => {
      if (person.name === personObject.name) {
        noDup = false

        if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
          const id = person.id
          
          nameService
            .update(id, personObject.name, personObject.number)
            .then((data) =>
              setPersons(persons.map((person) => (data.id !== person.id ? person : data))
            ))
            setNewName('')
            setNewNumber('')
        }

      }})
    
    if (noDup === true) {
      nameService
        .create(personObject)
        .then(returnedName => {
          setPersons(persons.concat(returnedName))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) => {
    setNameFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
        <Filter handleNameFilter={handleNameFilter}/>

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson}
      newName={newName}
      handleNameChange={handleNameChange} 
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
        <Persons persons={persons} filterSearch={filterSearch} setPersons={setPersons}/>
    </div>
  )
}

export default App