// 2.A

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]


//map takes a function as parameter. Key is required in Map

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)





// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
// import Note from './components/Note'


//PART 1.C
// const Hello = (props) => {
//   const dob = () => new Date().getFullYear() - props.age
//   return(
//   <div>
//     <p>Hello {props.name} you are {props.age} old, you must have been born in {dob()}</p>
//   </div>
//   )
// }

// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({button_fn, button_name}) => {
//   return(
//   <button onClick = {button_fn}>
//     {button_name}
//   </button>
//   )
// }
// const App = (props) => {
//   const [ counter, setCounter ] = useState(0) //Adds state and rerenders the component. 
//   //setCounter function is assigned to a function to modify the state.
//   //When setCounter is called React rerenders the component, i.e gets reexecuted

//   //setTimeout example
//   // const [ counter, setCounter ] = useState(0)
//   // setTimeout(
//   //   () => setCounter(counter + 1),
//   //   1000
//   // )
//   const increment = () => setCounter(counter+1)
//   const reset = () => setCounter(0)
//   const decrement = () => setCounter(counter-1)


//   const name = "niranjan"
//   const age = 21
//   return (
//     <div>
//       <Display counter={counter}/>
//       <Hello name = {name} age = {age}/>
//       <p>Implementing a counter</p>

//       <div>{counter}</div>
//       <Button button_fn = {increment} button_name = {"plus"}/>
//       <Button button_fn = {reset} button_name = {"reset"} />
//       <Button button_fn = {decrement} button_name = {"minus"} />

      
//     </div>
//   )
// }

//PART 1.D
// const History = ({props}) =>{
//   if(props.length == 0) {
//   return (
//   <div>
//     <p>Click buttons to start</p>
//   </div>
//   )
//   }

//   return(
//   <div>
//     <p>Clicked buttons are</p>
//     <p>{props.join(' ')}</p>
//   </div>
//   )
// }

// const App = (props) => {
//   // Using two states
//   // const [left, setLeft] = useState(0)
//   // const [right, setRight] = useState(0)


//   const [clicks, setClicks] = useState({ left: 0, right: 0})
//   const [allclicks, setAll] = useState([])

//   const handleLeftClick = () =>{
//   setClicks({ ...clicks, left: clicks.left + 1 })
//   setAll(allclicks.concat('L'))

//   }
//   const handleRightClick = () =>{
//   setClicks({ ...clicks, right: clicks.right + 1 })
//   setAll(allclicks.concat('R'))
//   }

//   return (
//     <div>
//       <div>
//         {clicks.left}
//         <button onClick= {handleLeftClick}> left </button>
//         <button onClick= {handleRightClick}>right</button>
//         {clicks.right}
//         <History props = {allclicks} />
//       </div>
//     </div>
//   )
// }

