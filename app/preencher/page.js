import Background from "@/imagens/Background.jpg"

const backgroundStyle = {
 backgroundImage: `url('${Background.src}')`,
}

export default function PaginaPreencher() {
 return (
  <main
   className="min-h-screen grid place-content-center p-24"
   style={backgroundStyle}
  >
   <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-8 max-md:w-[300px] max-lg:w-[700px] w-[900px]">
    <h1 className="uppercase text-4xl text-terceira text-center font-bold">
     preencha seu perfil:
    </h1>
    <div class="flex items-center justify-center w-full">
     <label
      for="dropzone-file"
      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white-50 hover:bg-gray-100"
     >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
       <svg
        aria-hidden="true"
        class="w-10 h-10 mb-3 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        ></path>
       </svg>
       <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span class="font-semibold">Clique para enviar uma foto</span>
       </p>
       <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
      </div>
      <input id="dropzone-file" type="file" class="hidden" />
     </label>
    </div>
    <div className="col-span-6 relative mt-4">
     <label
      htmlFor="usuario"
      className="block text-sm font-medium text-primaria"
     >
      Nome de usuário:
     </label>

     <input
      type="text"
      id="usuario"
      name="usuario"
      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
     />
    </div>

    <div className="col-span-6 relative">
     <label htmlFor="bio" className="block text-sm font-medium text-primaria">
      Bio:
     </label>

     <textarea
      type="text"
      id="bio"
      name="bio"
      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm min-h-32 text-left resize-none"
     />
    </div>

    <button className="inline-block shrink-0 rounded-md border border-segunda bg-segunda px-12 py-3 text-sm font-medium text-white transition place-self-end hover:bg-transparent hover:text-segunda focus:outline-none focus:ring active:text-segunda">
     Criar Perfil
    </button>
   </div>
  </main>
 )
}
