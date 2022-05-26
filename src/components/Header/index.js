import {Container} from './styles.js'
import Logo from '../../assets/unblogo.png'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/useUserContext.js'

const Header = () => {
    const {user} = useUserContext()
    return(
        <Container>
            <Link to="/">
                <img src={Logo} alt="logo da unb"/>
            </Link>
            <Link to="/">Homepage</Link>
            <Link to="/estudantes">Alunos</Link>
            <Link to="/turmas">Turmas</Link>
            { user ? user.email : <Link to="/login">Logar</Link> }
        </Container>
    )
}

export default Header