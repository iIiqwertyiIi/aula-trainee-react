import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button"
import { Container } from "./styles";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <Container>
            <Input onChangeFunction={setEmail} placeholder="Email"/>
            <Input onChangeFunction={setPassword} placeholder="Senha" type="password"/>
            <Button>Efetuar Login</Button>
        </Container>
    )
}

export default LoginPage;