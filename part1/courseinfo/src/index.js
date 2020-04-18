
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
	return(
	<>
		<h1>{course.name}</h1>
	</>
	)

}

const Content = (cont) => {
	return(
	<>
		<p>{cont.part} {cont.exercise}</p>
	</>
	)

}

const Total = (number) => {
	return(
	<>
		<p>Number of exercises {number.val}</p>
	</>
	)

}

const App = () => {
  console.log("sd")
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
       <Header name={course} />
       <Content part={part1} exercise={exercises1} />
       <Content part = {part2} exercise={exercises2} />
       <Content part = {part3} exercise={exercises3} />
       <Total val = {exercises1 + exercises2 + exercises3} />

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
