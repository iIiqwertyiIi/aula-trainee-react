import { Container } from './styles'
import { photo } from '../../services/api'
import { AiFillDelete } from 'react-icons/ai'
import { api } from '../../services/api'

const DisciplinesCard = ({disciplina, turma, professor, image_url, id}) => {
  
  const deleteDiscipline = async (id) => {  
      try {
        const response = await api.delete(`disciplines/delete/${id}`)
  
        if(response.data) {
          alert("Disciplina deletada!")
        }
  
      }catch(e) {
        alert(e)
      }
  }

  return (
    <Container>
        <img src={image_url ? photo.defaults.baseURL + image_url : `https://source.unsplash.com/random?book`} alt="Imagem da disciplina"/>
        <AiFillDelete size={32} onClick={() => deleteDiscipline(id)}/>
        <div>
            <p>{`${disciplina} - ${turma}`}</p>
            <p>{professor}</p>
        </div>
    </Container>
  )
}

export default DisciplinesCard