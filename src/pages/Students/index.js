import Students from '../../components/Students/index.js';
import AddContainer from '../../components/AddContainer'
import { useState } from 'react';

const StudentsPage = () => {
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
            <AddContainer addFunction={addStudents}/>
            <Students students={students}/>
        </>
    )
}

export default StudentsPage