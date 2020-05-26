
import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
	return(
	<>
		<h1>{course}</h1>
	</>
	)

}

const Total = ({ parts }) => {
  let totalExercises = 0;
  if (parts) {
    parts.forEach(part => {
      totalExercises += part.exercises;
    });
  }
  return <p>Number of exercises {totalExercises}</p>;
};

const Content = ({parts}) => {
  return (
  <p>
      {
        parts.map((part, index) => {
          return (
            <Part key={index} part={part.name} exercise={part.exercises} />
          );
        })}
    </p>
    )
}

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};


const App = () => {
  const course = {
    
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        
      },
      {
        name: 'State of a component',
        exercises: 14,
        
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts= {course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))



// // import ReactDOM from 'react-dom'


// const Header = (props) => {
//   return(
//     <div>
//       <h1>{props.course} </h1>
//     </div>
//     )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course = {course} />
//       <
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))