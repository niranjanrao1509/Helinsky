
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
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts= {course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
