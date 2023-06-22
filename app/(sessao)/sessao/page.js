import PublicacaoComponent from "@/components/PublicacaoComponent";
// import Tata from "@/imagens/tatabraids.svg"
import Raquel from "@/imagens/raquelbraids.svg"
 import Amaka from "@/imagens/amaka.svg" 
 import Tata from "@/imagens/tatabraids.svg"

// pc do proa laga logo agr
// foiii
// ela n é?
// vamos ver o resultado

// qq aconteceu
// deixa eu testar com a raquel
// acho q é por causa do svg perae

const listaDePublicacoes = [
    {usuario: "TataBraids", texto:"Acompanhe meu trabalho!❤️, @tata_braids_", fotoPerfil: Tata, fotoPublicacao: Tata},
    {usuario: "Amaka", texto:"Acompanhe meu trabalho!❤️, @amaka_afro", fotoPerfil: Amaka, fotoPublicacao: Amaka},
    {usuario: "Raquel Braids", texto:"Acompanhe meu trabalho!❤️, @raquelbraidsoficial", fotoPerfil: Raquel, fotoPublicacao: Raquel}
]

export default function SessaoPagina() {
 return (
    <div className="grid py-16 gap-8 justify-items-center">
        {listaDePublicacoes.map((item, index) => {
            return <div key={index}>
                <PublicacaoComponent {...item} />
            </div>
        })}
    </div>
 )
}
