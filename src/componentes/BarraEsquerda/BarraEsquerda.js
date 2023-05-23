import './BarraEsquerda.css'

export default function BarraEsquerda(props) {
    return (
        <div className="container3">
            
            <img src={props.foto} alt="" />
            <h3>{props.nome}</h3>
            <h5>{props.nomeusuario} </h5>
            <p>{props.posts}</p>
            <p>{props.seguidores}</p>
            <p>{props.nota}</p>
            <p>{props.areas} </p>
        </div>
    )
}