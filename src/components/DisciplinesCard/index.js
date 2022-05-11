import React from 'react'
import { Container } from './styles'
import { photo } from '../../services/api'

const DisciplinesCard = ({disciplina, turma, professor, image_url}) => {
    console.log(image_url)
  return (
    <Container>
        <img src={image_url ? photo.defaults.baseURL + image_url : 'https://source.unsplash.com/random?book'} alt="Livro da disciplina"/>
        <div>
            <p>{`${disciplina} - ${turma}`}</p>
            <p>{professor}</p>
        </div>
    </Container>
  )
}

export default DisciplinesCard