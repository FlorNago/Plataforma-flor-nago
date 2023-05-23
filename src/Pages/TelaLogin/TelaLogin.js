import './TelaLogin.css'
import logofn from "../../Assets/Image/Logo.svg"
import { Link } from 'react-router-dom'


export default function TelaLogin(props) {
    return (
        <div class="container">
            <div class="box">
                <br />
                <div className="logo">
                    <Link to="/"><img src={logofn} alt="Logo da plataforma flor nagô" /></Link>
                </div>
                <br />
                <form className='forms' action="submit">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Digite o seu Email' />
                    <br />
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder='Digite sua senha' />
                    <br />
                    <button className='botao' type="submit">Login</button>
                    <Link to="/cadastro">Não tem conta? Se Inscreva</Link>
                </form>
            </div>

        </div>
    )

}