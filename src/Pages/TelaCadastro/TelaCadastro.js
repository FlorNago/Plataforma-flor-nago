import './TelaCadastro.css'
import logofn from "../../Assets/Image/Logo.svg"
import { Link } from 'react-router-dom'

export default function TelaCadastro(props) {
    return (
        <div class="container1">
            <div class="box1">
                <br />
                <div className="logo">
                    <Link to="/"><img src={logofn} alt="Logo da plataforma flor nagô" /></Link>
                </div>
                <br />
                <form className='forms1' action="submit">
                    <label htmlFor="">Nome Completo</label>
                    <input type="text" placeholder='Seu nome completo' />
                    <br />
                    <label htmlFor="">Profissão</label>
                    <input type="text" placeholder='Digite sua profissão' />
                    <br />
                    <label htmlFor="">Endereço de Atendimento</label>
                    <input type="text" placeholder='Digite seu endereço' />
                    <br />
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Digite seu email' />
                    <br />
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder='Digite sua senha' />
                    <br />
                    <button className='botao1' type="submit">Cadastre-se</button>
                </form>
            </div>

        </div>
    )

}