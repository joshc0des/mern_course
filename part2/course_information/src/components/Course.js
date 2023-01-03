const Header = (props) => {
const { name } = props.course

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = (props) => {
  const { name, exercises } = props.part

  return (
    <p>{name} {exercises}</p>
  )
}

const Content = (props) => {
  const { parts } = props

  return (
    <div>
        {parts.map(part => <Part key={part.id} part={part}/>)}
    </div>
  )
}

const Total = (props) => {
  const { exercises } = props

  return (
    <>
      <p>Number of exercises {exercises.reduce((partialSum, ex) => partialSum + ex, 0)}</p>
    </>
  )
}

const Course = (props) => {
  const { course } = props
  return (
    <>
      <Header  course={course}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts.map(part => part.exercises)}/>
    </>
  )
}

export default Course