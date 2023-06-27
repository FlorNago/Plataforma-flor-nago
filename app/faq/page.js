import Waves from "@/imagens/waves-sobre.svg"
import Image from "next/image"
import { TbUserSearch } from "react-icons/tb"
import { MdOutlineAutoGraph } from "react-icons/Md"

export default function PaginaFAQ() {
 return (
  <section className="bg-white dark:bg-quarta">
   <div className="container px-6 py-10 mx-auto">
    <h3 className="text-segunda text-center text-6xl font-extrabold sm:text-4xl">
     FAQ
    </h3>
    <p className="text-primaria text-center text-6xl font-extrabold sm:text-4xl">
     FLOR <span className="text-terceira">NAGÔ</span>
    </p>

    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
     <div className="flex flex-col items-center p-6 space-y-3 text-center bg-quarta rounded-lg dark:bg-primaria">
      <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-terceira">
       <TbUserSearch className="w-6 h-6" />
      </span>
      <h1 className="text-xl font-semibold text-white-700 capitalize dark:text-white">
       Encontrar profissionais ou produtos na plataforma?
      </h1>

      <p className="text-white-500 font-semibold dark:white-white-300 text-justify">
      Na plataforma, é possível contatar os profissionais por meio das informações de contato fornecidas na barra esquerda de seus perfis. Ao encontrar um profissional que deseja contatar, você pode utilizar as informações disponíveis, como número de telefone, endereço de e-mail, site ou botões de mensagens diretas, para se comunicar com eles. Essas informações de contato podem ser encontradas no perfil do profissional, facilitando o estabelecimento de contato e a busca por serviços ou produtos que eles oferecem.
      </p>
     </div>

     <div className="flex flex-col items-center p-6 space-y-3 text-center bg-terceira rounded-lg dark:bg-primaria">
      <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-terceira">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
       >
        <path
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
       </svg>
      </span>

      <h1 className="text-x font-semibold text-terceira-700 capitalize dark:text-white">
      Quais são os benefícios de usar a plataforma?
      </h1>

      <p className="text-terceira-500 font-semibold dark:text-white-300 text-justify">
      Ao utilizar a plataforma, você estará contribuindo para a visibilidade de artistas e empresários da estética afro, ajudando a criar uma comunidade engajada e de apoio. Esse engajamento permite dar destaque às causas certas e promover uma maior conscientização sobre questões relacionadas à estética afro. Ao apoiar esses profissionais, você estará fortalecendo sua presença e oferecendo oportunidades para que sejam reconhecidos e valorizados em suas respectivas áreas. Juntos, podemos construir uma comunidade que celebra e apoia a diversidade, a inclusão e as causas que são importantes para promover a igualdade e a representatividade.
      </p>
     </div>

     <div className="flex flex-col items-center p-6 space-y-3 text-center bg-segunda rounded-xl dark:bg-primaria">
      <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-terceira">
       <MdOutlineAutoGraph />
      </span>

      <h1 className="text-xl font-semibold text-white-700 capitalize dark:text-white">
      Planos futuros:
      </h1>

      <p className="text-white-500 dark:text-white-300 text-justify">
       Nos temos como planos futuros e implementações na plataforma um chat para
       vocês poderem entrar em contrato na própia plataforma além de um
       aplicativo mobile para vocês poderem usufruir de todas as
       funcionabilidades em seu aparelho mobile com mais facilidade!
      </p>

      <a
       href="#"
       className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
      >
       <span className="mx-1">read more</span>
       <svg
        className="w-4 h-4 mx-1 rtl:-scale-x-100"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         fill-rule="evenodd"
         d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
         clip-rule="evenodd"
        ></path>
       </svg>
      </a>
     </div>
    </div>
   </div>
  </section>
 )
}
