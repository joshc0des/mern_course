import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }  
  ])

  const [filterSearch, setNameFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      }})
    
    if (noDup === true) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    else {
      alert(`${newName} is already added to phonebook`)
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
        <Persons persons={persons} filterSearch={filterSearch}/>
    </div>
  )
}

export default App