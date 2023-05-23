import './NavBar.css'
import logofn from "../../Assets/Image/Logo.svg"
import { Link } from 'react-router-dom'


export default function NavBar(props) {
    return (
        <>
            <nav>
                <ul>
                    <img className='logo1' src={logofn} alt="" />
                    <li>Sobre</li>
                    <li>Planos</li>
                    <li>Cursos</li>
                    <li>FAQ</li>
                    <br />
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cadastro"><button>Cadastre-se</button></Link></li>
                </ul>
            </nav>

        </>
    )
}