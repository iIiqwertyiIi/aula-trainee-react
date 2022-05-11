import Header from './components/Header/index.js'
import Input from './components/Input/index.js';
import Students from './components/Students/index.js';
import './global.css'
import {useState} from 'react'

function App() {
  let a = 0
  const [number, setNumber] = useState(0)
  const [students, setStudents] = useState([])
  const addStudents = (input) => {
    setStudents([...students, input])
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Incrementar</button>
      <button onClick={() => console.log(number)}>Imprimir</button>
      <Header/>
      <Input addStudents={addStudents}/>
      <Students students={students}/>
    </>
  );
}

export default App;
