const Filter = (props) => {
  const { handleNameFilter } = props

  return (
    <div>
    filter shown with <input onChange={handleNameFilter}/>
    </div>
  )
}

export default Filter