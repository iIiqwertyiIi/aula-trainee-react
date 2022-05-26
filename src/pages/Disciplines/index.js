import Disciplines from '../../components/Disciplines/index.js';
import AddContainer from '../../components/AddContainer/index.js';
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js';


const DisciplinesPage = () => {
    const [disciplines, setDisciplines] = useState([])
    
    // const getDisciplines = async () => {
    //   const response = await api.get('/disciplines/index');
    //   console.log(response.data);
    // }

    useEffect(() => {
        api.get('/disciplines/index')
        .then(response => setDisciplines(response.data))
    }, [])

    const classCodes = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ]

    const countClasses = (className) => {
        let counter = 0;

        disciplines.forEach(discipline => {
            if(discipline.name === className)
            counter++
        })
        return counter;
    }

    const addDisciplines = async (input) => {
        const classCodeIndex = countClasses(input);

        try {
            const response = await api.post('disciplines/create', { 
            discipline: {
                name: input,
                code: classCodes[classCodeIndex],
                teacher_id: 1
            }
            })

            if(response.data) {
            setDisciplines([...disciplines, response.data])
            alert("Disciplina criada!")
            }

        }catch(e) {
            alert(e)
        }
    }

    return (
        <>
            <AddContainer placeholder="Nova Disciplina" addFunction={addDisciplines}/>
            <Disciplines disciplines={disciplines} />
        </>
    )
}
  
export default DisciplinesPage