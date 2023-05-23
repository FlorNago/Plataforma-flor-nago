import './LandingPage.css'
import FotoLP from "../../Assets/Image/img-lp.png"

export default function LandingPage() {
    return (
        <div className="container4">
            <div className="box2">
                <h1>A rede onde a sua <br /> beleza é a nossa arte!</h1>
                <h5>Venha conhecer a plataforma de transcista <br /> mais famosa do Brasil</h5>
                <br />
                <button>Veja agora</button>
                <button>Saiba Mais</button>
            </div>
            <div>
                <img src={FotoLP} alt="Mulher preta com turbante roxo e amarelo, de brincos argolas dourados e maquiagem roxa" />
            </div>
            

        </div>
    )
}