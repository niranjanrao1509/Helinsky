import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Hello = (props) => {
  const dob = () => new Date().getFullYear() - props.age
  return(
  <div>
    <p>Hello {props.name} you are {props.age} old, you must have been born in {dob()}</p>
  </div>
  )
}


const Button = (props) => {
  return(
  <button onClick = {props.button_fn}>
    {props.button_name}
  </button>
  )
}
const App = (props) => {
  const [ counter, setCounter ] = useState(0) //Adds state and rerenders the component. 
  //setCounter function is assigned to a function to modify the state.
  //When setCounter is called React rerenders the component, i.e gets reexecuted

  //setTimeout example
  // const [ counter, setCounter ] = useState(0)
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  const increment = () => setCounter(counter+1)
  const reset = () => setCounter(0)

  const name = "niranjan"
  const age = 21
  return (
    <div>
      <Hello name = {name} age = {age}/>
      <p>Implementing a counter</p>

      <div>{counter}</div>
      <Button button_fn = {increment} button_name = {"plus"}/>
      <Button button_fn = {reset} button_name = {"reset"} />
      
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)