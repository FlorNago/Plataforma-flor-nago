import Waves from "@/imagens/waves-sobre.svg"
import Foto1 from "@/imagens/tata-sobre.svg"
import Image from "next/image"

export default function PaginaQuemSomos() {
 return (
  <div class="flex flex-1 flex-row max-h-screen overflow place-content-center">
   <a
    href="#"
    class="group relative block rounded-3xl border-4 border-black bg-white pt-12 transition hover:bg-quarta sm:pt-16 lg:pt-24 mt-4"
   >
    <span class="absolute inset-0 -z-10 -translate-x-2 -translate-y-2 rounded-3xl bg-white ring-4 ring-black"></span>

    <span class="absolute inset-0 -z-20 -translate-x-4 -translate-y-4 rounded-3xl bg-white ring-4 ring-black"></span>

    <div class="p-4 sm:p-6 lg:p-8">
     
      <h1 className="text-terceira font-bold text-7xl text-center ">
       {" "}
       O QUE É <br /> <span className="text-primaria">FLOR</span> NAGÔ?
      </h1>
    

     <p class="mt-1  text-segunda font-semibold text-2xl max-w-lg pt-10">
      Somos uma plataforma de conexão entre artistas empresários da estética
      afro e clientes que gostariam de conhecer um pouco mais sobre a cultura.
     </p>
    </div>
   </a>

   <Image
    src={Waves}
    fill
    className="object-contain object-bottom right-0 -z-10"
   />
   <Image
    src={Foto1}
    className="-z-[5] h-4/6 object-scale-down object-right absolute bottom-0 right-0 max-[1080px]:hidden"
   />
  </div>
 )
}
