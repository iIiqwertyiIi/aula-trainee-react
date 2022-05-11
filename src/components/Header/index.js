import {Container} from './styles.js'
import Logo from '../../assets/unblogo.png'

const Header = () => {
    return(
        <Container>
            <img src={Logo}/>
        </Container>
    )
}

export default Header