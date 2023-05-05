import './TelaLogin.css'

export default function TelaLogin(comps) {
    return (
        <div class="container">
            <div class="box">
                <form action="submit">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Digite o seu Email'/>
                    <br />
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder='Digite sua senha'/>
                    <br />
                    <button type="submit">Login</button>
                    <a href="">Não tem conta? Se Inscreva</a>
                </form>
            </div>
            
        </div>
    )

}