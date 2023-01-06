const Filter = (props) => {
  const { handleFilter, filterSearch } = props

  return (
    <span>
      <input value={filterSearch} onChange={handleFilter}/>
    </span>
  )
}

export default Filter