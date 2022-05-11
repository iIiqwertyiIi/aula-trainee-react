import React from 'react'
import { Container } from './styles'

const StudentsCard = ({nome}) => {
  return (
    <Container>
        <img src='https://source.unsplash.com/random?profile'alt="Imagem do aluno"/>
        <div>
            <p>{nome}</p>
            <p>Engenharia de computação</p>
        </div>
    </Container>
  )
}

export default StudentsCard