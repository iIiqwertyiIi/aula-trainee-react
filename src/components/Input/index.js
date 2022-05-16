import { useState } from "react"
import { Container } from "./styles"

const Input = ({addFunction, placeholder}) => {
    const [input, setInput] = useState()
    return (
        <Container>
            <input onChange={setInput} type="text" placeholder={placeholder}/>
            <button onClick={() => addFunction(input.target.value)}>Adicionar</button>
        </Container>
    )
}

export default Input