import { useState } from "react"
import { Container } from "./styles"

const Input = ({addStudents}) => {
    const [input, setInput] = useState()
    return (
        <Container>
            <input onChange={setInput} type="text" placeholder="Novo Aluno"/>
            <button onClick={() => addStudents(input.target.value)}>Adicionar</button>
        </Container>
    )
}

export default Input