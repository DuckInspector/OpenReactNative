const Content = (props) => {
  console.log(props.p1)
  console.log(props.p2)
  console.log(props.p3)
  return (
    <>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
      <p>{props.p3}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{course}</h1>
      <Content p1={parts[0].name} p2={parts[1].name} p3={parts[2].name}/>
      <Total e1={parts[0].exercises} e2={parts[1].exercises} e3={parts[2].exercises}/>
    </div>
  )
}

export default App