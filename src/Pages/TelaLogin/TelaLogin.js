import './TelaLogin.css'
import logofn from "../../Assets/Image/logofn.svg"
import { Link } from 'react-router-dom'


export default function TelaLogin(props) {
    return (
        <div class="container">
            <div class="box">
                <img src={logofn} className='logo' alt="Logo da plataforma flor nagô" />
                <form className='forms' action="submit">
                    <label htmlFor="">{props.label}</label>
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