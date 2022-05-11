import StudentsCard from '../StudentsCard'
import { Container } from './styles'

const Students = ({students}) => {
  return (
    <Container>
        {students.map((item, index) => (
            <StudentsCard key={index} nome={item}/>
        ))}
    </Container>
  )
}

export default Students