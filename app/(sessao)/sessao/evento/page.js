import Image from "next/image"
import EventoFoto from "@/imagens/evento.svg"

export default function PaginaEvento() {
 return (
  <section>
   <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div class="max-w-3xl">
     <h2 class="text-3xl text-primaria font-bold sm:text-4xl">
      <span class="text-segunda">EVENTO</span>{" "}
      <span class="text-terceira">FLOR</span> NAGÔ
     </h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
     <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
      <Image
       alt="Party"
       src={EventoFoto}
       height={1080}
       width={1080}
       class="absolute inset-0 h-full w-full object-fill"
      />
     </div>

     <div class="lg:py-16">
      <article class="space-y-4 text-gray-600">
       <p>
        O <span class=" text-bold text-terceira">Evento Flor Nagô</span> nasceu com o objetivo de dar vida ao nosso projeto e
        demonstrar que nosso modelo financeiro é viável. Para alcançarmos lucro,
        iremos cobrar pequenas taxas sobre as vendas de alimentos no projeto,
        além de promover atividades como bingo em parceria com nossas trancistas
        e vendedora de acessórios. A ideia é realizar o evento inicialmente nas
        comunidades, mas devido ao contexto do demoday, faremos o evento piloto
        no SENAC Lapa Tito. O evento contará com atrações emocionantes, como
        bingo com prêmios de tranças e acessórios, serviços de confecção de
        tranças, música ao vivo e venda de comidas e acessórios. Será um dia
        memorável e incrível para todos nós.
       </p>

       <p>
        Esse evento piloto no SENAC Lapa Tito é apenas o começo. Temos grandes
        planos para o futuro do <span class=" text-bold text-terceira">Evento Flor Nagô</span> e estamos empolgados em
        expandir nossas atividades para as favelas e outros locais comunitários.
        Queremos levar nossa proposta de valor para um público cada vez maior,
        promovendo inclusão, diversidade e oportunidades para empreendedores e
        profissionais da beleza afro. Contamos com a presença de todos nesse dia
        especial e convidamos você a fazer parte dessa jornada conosco.
       </p>
      </article>
     </div>
    </div>
   </div>
  </section>
 )
}
// coloca um h1 ou algo pra testar
// se a sidebar e a topbar funcionar entao ta tranquilo
// caso contrario, coloque dentro da pasta sessao
