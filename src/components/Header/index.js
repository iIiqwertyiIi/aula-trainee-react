import {Container} from './styles.js'
import Logo from '../../assets/unblogo.png'

const Header = () => {
    return(
        <Container>
            <img src={Logo} alt="logo da unb"/>
        </Container>
    )
}

export default Header