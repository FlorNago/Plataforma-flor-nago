"use client"

import { getSession } from "next-auth/react"
import Image from "next/image"
import { useRef, useState } from "react"

import { AiOutlineUser } from "react-icons/ai"

export default function ModalComponent({ session, open, callback }) {
 const [preview, setPreview] = useState(null)
 const [image, setImage] = useState(null)

 const fileInputRef = useRef()

 async function deleteUserPhoto() {
    const response = await fetch("/api/user/edit/profile/photo", {
     method: "DELETE",
    })
    
    if (response.status !== 200) {
        // TODO: amanusear quando a remoção der erro
        return
    }

    console.log("imagem removida com sucesso!")
 }

 async function updateUserProfile() {
  if (!image) return

  const formData = new FormData()
  formData.append("image", image)

  const response = await fetch("/api/user/edit/profile/photo", {
   method: "PUT",
   body: formData,
  })

  if (response.status !== 200) {
   // TODO: manusear quando o upload der erro
   return
  }

  console.log("imagem upload com sucesso!")
 }

 function onFileSelected(event) {
  const { files } = event.target

  if (!files) return

  const previewURL = URL.createObjectURL(files[0])
  setImage(() => files[0])
  setPreview(() => previewURL)
 }

 return (
  <div
   id="updateProductModal"
   aria-hidden={true}
   className={`${
    open ? "flex" : "hidden"
   } overflow-y-auto bg-black/40 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full md:h-full`}
  >
   <div className="relative p-4 w-full max-w-2xl h-full md:h-auto place-self-center">
    {/* <!-- Modal content --> */}
    <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
     {/* <!-- Modal header --> */}
     <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
      <h3 className="text-lg font-semibold text-gray-900 ">Editar usuário</h3>
      <button
       type="button"
       className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
       data-modal-toggle="updateProductModal"
       onClick={callback}
      >
       <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         fill-rule="evenodd"
         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
         clip-rule="evenodd"
        ></path>
       </svg>
       <span className="sr-only">Close modal</span>
      </button>
     </div>
     {/* <!-- Modal body --> */}
     <form action="#">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
       <div className="sm:col-span-2 flex items-center gap-4">
        {preview ? (
         <Image
          className="rounded-full w-20 h-20 object-cover"
          src={preview}
          width={80}
          height={80}
          alt=""
         />
        ) : session?.user?.image_url ? (
         <Image
          src={session.user.image_url}
          width={80}
          height={80}
          className="rounded-full w-20 h-20 object-cover"
         />
        ) : (
         <AiOutlineUser size={80} className="rounded-full w-20 h-20" />
        )}
        <div className="flex-1">
         <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="file_input"
         >
          Carregar foto
         </label>
         <input
          onChange={onFileSelected}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
          accept="image/*"
          ref={fileInputRef}
         />
         <p className="mt-1 text-sm text-gray-500" id="file_input_help">
          SVG, PNG, JPG or GIF (MAX. 800x400px).
         </p>

         <div className="flex items-center gap-2">
          <button
           onClick={updateUserProfile}
           type="button"
           className="border bg-segunda text-white box-border normal-case cursor-pointer inline-flex items-center text-center text-xs leading-4 font-medium bg-none m-0 px-3 py-2 rounded-lg border-solid"
          >
           Salvar
          </button>

          {preview ? (
           <button
           onClick={() => {
            setPreview(null)
            fileInputRef.current.value = ""
           }}
           type="button"
           className="border box-border normal-case cursor-pointer inline-flex items-center text-center text-xs leading-4 font-medium bg-none m-0 px-3 py-2 rounded-lg border-solid"
          >
           Remover previa
          </button>
          ) : (
           <button
            onClick={deleteUserPhoto}
            type="button"
            className="border border-red-500 text-red-500 box-border normal-case cursor-pointer inline-flex items-center text-center text-xs leading-4 font-medium bg-none m-0 px-3 py-2 rounded-lg border-solid"
           >
            Remover foto do perfil
           </button>
          )}
         </div>
        </div>
       </div>
       <div className="sm:col-span-2">
        <label
         for="name"
         className="block mb-2 text-sm font-medium text-gray-900"
        >
         Nome de usuário
        </label>
        <input
         type="text"
         name="name"
         id="name"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
         placeholder="@meunome"
        />
       </div>
       <div className="sm:col-span-2">
        <label
         for="description"
         className="block mb-2 text-sm font-medium text-gray-900"
        >
         Biografia
        </label>
        <textarea
         id="description"
         rows="5"
         className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
         placeholder="Fale um pouco sobre você"
        />
       </div>
      </div>
      <div className="flex items-center space-x-4">
       <button
        type="submit"
        className="text-white bg-segunda focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
       >
        Terminar edição
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 )
}
