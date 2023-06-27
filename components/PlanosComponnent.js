import Image from "next/image"

import FlorNago from "@/imagens/logo_plataforma.svg"
import Verificado1 from "@/imagens/verificado-1.svg"
import Verificado2 from "@/imagens/verificado-2.svg"

export default function PlanosComp({ name, desc, price, isMostPop, features }) {
 return (
  <div
   className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 rounded-xl sm:max-w-md ${
    isMostPop
     ? "bg-segunda 900 border-white-900 border-x-0 sm:border-x-2"
     : "bg-quarta border-white-900 border-x-0 sm:border-x-2"
   }`}
  >
   <div className={`p-4 py-8 space-y-4 border-b md:p-8 grid ${isMostPop ? "border-terceira" : "border-segunda"}`}>
    <Image src={FlorNago} alt="" />
    <span className={`text-white mt-4 bg-primaria px-4 py-2 rounded-full w-2/5 text-lg font-bold flex place-self-center justify-center border-4 border-terceira ${!isMostPop && "bg-segunda"}`}>{name}</span>
    <div className={`text-white text-3xl font-semibold ${!isMostPop && "text-black"}`}>
     R${price} <span className="text-xl font-normal">/mês</span>
    </div>
    <p className={`text-white ${!isMostPop && "text-black"}`}>{desc}</p>
    <button className={`px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-segunda hover:bg-primaria active:bg-primaria ${isMostPop && "bg-terceira"}`} >
     Começe agora
    </button>
   </div>
   <ul className={`p-4 py-8 space-y-3 md:p-8 text-white ${!isMostPop && "text-black"}`}>
    {" "}
    {features.map((featureItem, idx) => (
     <li key={idx} className="flex items-center gap-5">
      {isMostPop ? (
       <Image className="w-8 h-8" src={Verificado2} />
      ) : (
       <Image className="w-8 h-8" src={Verificado1} />
      )}
      {featureItem}
     </li>
    ))}
   </ul>
  </div>
 )
}
