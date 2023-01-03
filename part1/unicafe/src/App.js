import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad } = props
  const calcAverage = () => Math.round(((good + bad*-1)/(good + neutral + bad))*10) / 10;
  const calcPositive = () => Math.round(((100 * good) / (good + neutral + bad))*100) / 100 + ' %';

  if ((good + neutral + bad) > 0){
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={good + neutral + bad}/>
          <StatisticLine text="average" value={calcAverage()}/>
          <StatisticLine text="positive" value={calcPositive()}/>
        </tbody>
      </table>
    )
  }
  else {
    return (
      <div>
          <span>No feeback given</span>
      </div>
    )
  }
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleNeutral = () => setNeutral(neutral + 1)
  const handleGood = () => setGood(good + 1)
  const handleBad = () => setBad(bad + 1)
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
