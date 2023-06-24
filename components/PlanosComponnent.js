import Image from "next/image"
import Verificado1 from "@/imagens/verificado-1.svg"
import Verificado2 from "@/imagens/verificado-2.svg"

export default function PlanosComp({ name, desc, price, isMostPop, features }) {
 return (
  <div
   className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 rounded-xl sm:max-w-md ${
    isMostPop
     ? "bg-primaria 900 border-white-900 border-x-0 sm:border-x-2"
     : "bg-quarta border-white-900 border-x-0 sm:border-x-2"
   }`}
  >
   <div className="p-4 py-8 space-y-4 border-b border-gray-700 md:p-8">
    <span className="text-gray-200 font-medium">{name}</span>
    <div className="text-cyan-400 text-3xl font-semibold">
     R${price} <span className="text-xl font-normal">/mês</span>
    </div>
    <p className="text-gray-400">{desc}</p>
    <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-segunda hover:bg-primaria active:bg-primaria">
     Começe agora
    </button>
   </div>
   <ul className="p-4 py-8 space-y-3 md:p-8">    {features.map((featureItem, idx) => (
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
