import Header from './components/Header/index.js'
import Input from './components/Input/index.js';
// import Students from './components/Students/index.js';
import './global.css'
import {useState, useEffect} from 'react'
import {api} from './services/api'
// import DisciplinesCard from './components/DisciplinesCard/index.js';
import Disciplines from './components/Disciplines/index.js';

function App() {
  // const [number, setNumber] = useState(0)
  // const [students, setStudents] = useState([])
  const [disciplines, setDisciplines] = useState([])

  // const addStudents = (input) => {
  //   setStudents([...students, input])
  // }

  // const loadDisciplines = async () => {
  //   const response = await api.get('/disciplines/index')
  //   setDisciplines(response.data)
  // }

  useEffect(() => {
    // loadDisciplines();
    api.get('/disciplines/index').then(
     response => setDisciplines(response.data) 
    )
  },[])

  const classCodes = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ]

  const countClasses = (disciplineName) => {
    let counter = 0;
    disciplines.forEach(discipline => {
      if(discipline.name === disciplineName)
        counter++;
    })
    return counter;
  }

  const addDiscipline = async (input) => {
    const classCode = countClasses(input)
    try {
      const response = await api.post('/disciplines/create', {
        discipline: {
          name: input,
          code: classCodes[classCode],
          teacher_id: 1
        }
      })
      
      if (response.data) {
        alert('Disciplina adicionada!')
        setDisciplines([...disciplines, response.data])

      }
    }catch(e) {
      alert(e);
    }
  }

  return (
    <>
      {/* <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Incrementar</button>
      <button onClick={() => console.log(number)}>Imprimir</button> */}
      <Header/>
      {/* <Input placeholder="Novo Aluno" addFunction={addStudents}/> */}
      <Input placeholder="Nova Disciplina" addFunction={addDiscipline}/>

      {/* <Students students={students}/> */}
      {/* <DisciplinesCard disciplina="Cálculo 1" turma="B" professor="Adail"/> */}
      <Disciplines disciplines={disciplines}/>
    </>
  );
}

export default App;
