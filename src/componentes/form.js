export default function Form(props) {
    return (
        <div class="container">
            <div class="box">
                <img src={logofn} className='logo' alt="Logo da plataforma flor nagô" />
                <form action="submit">
                    <label htmlFor="">{props.label}</label>
                    <input type="text" placeholder= />
                    <br />
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder='Digite sua senha' />
                    <br />
                    <button type="submit">Login</button>
                    <a href="">Não tem conta? Se Inscreva</a>
                </form>
            </div>

        </div>
    )

}