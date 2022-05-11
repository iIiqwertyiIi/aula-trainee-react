import DisciplinesCard from '../DisciplinesCard'
import { Container } from './styles'

const Disciplines = ({disciplines}) => {
  return (
    <Container>

        {disciplines.map((item, index) => (
            <DisciplinesCard
                key={index} disciplina={item.name}
                turma={item.code} professor={item.teacher.name}
                image_url={item.books_url && item.books_url[0]}
            />
        ))}
    </Container>
  )
}

export default Disciplines