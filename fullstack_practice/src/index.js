import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  

  

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  const increment = () => setCounter(counter+1)
  const reset = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick = {increment}>
        plus
      </button>
      <button onClick = {reset}>
        reset
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)