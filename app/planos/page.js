import Waves from "@/imagens/waves-planos.svg"
import Image from "next/image"
import PlanosComp from "@/components/PlanosComponnent"

const plans = [
 {
  name: "Pro",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  price: "29,90",
  isMostPop: true,
  features: [
    "Mais visibilidade",
    "Sorteios Exclusivos",
    "Suporte Prioritário",
    "Selo de verificação"
  ],
 },
 {
  name: "Básico",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  price: "9,99",
  isMostPop: false,
  features: [
   "Mais visibilidade",
   "Selo de verificação"
  ],
 },
]

export default function PlanosLP() {
 return (
  <section
   className="relative py-14"
   style={{
    backgroundImage: `url(${Waves.src})`,
    objectFit: "contain",
    objectPosition: "bottom",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
   }}
  >
   <div className="relative max-w-screen-xl mx-auto text-quarta-300 sm:px-4 md:px-8">
    <div className="max-w-xl mx-auto space-y-3 px-4 text-center sm:px-0">
     <h3 className="text-segunda text-6xl font-extrabold sm:text-4xl">PLANOS</h3>
     <p className="text-primaria text-6xl font-extrabold sm:text-4xl">
      FLOR <span className="text-terceira">NAGÔ</span>
     </p>
     <div className="max-w-xl">
     </div>
    </div>
    <div className="mt-2 gap-4 justify-center grid place-content-center lg:flex">
     {plans.map((item, index) => {
      return <PlanosComp {...item} key={index} />
     })}
    </div>
   </div>
  </section>
 )
}
