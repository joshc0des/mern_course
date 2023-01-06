const Filter = (props) => {
  const { handleFilter } = props

  return (
    <span>
      <input onChange={handleFilter}/>
    </span>
  )
}

export default Filter