"use client"

import { getSession, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

import { AiOutlineUser } from "react-icons/ai"
import CirculoCarregamentoComponent from "./CirculoCarregamentoComponent"
import { toast } from "react-toastify"

export default function ModalComponent({ session, open, callback }) {
 const { update } = useSession()
 const router = useRouter()
 const [preview, setPreview] = useState(null)
 const [image, setImage] = useState(null)
 const [userInformation, setUserInformation] = useState({
  username: session?.user?.username,
  biography: session?.user?.biography,
 })
 const [informationLoading, setInformationLoading] = useState(false)
 const [imageLoading, setImageLoading] = useState(false)
 const [deleteImageLoading, setDeleteImageLoading] = useState(false)

 const fileInputRef = useRef()

 function changeInput(property, value) {
  setUserInformation((previous) => ({ ...previous, [property]: value }))
 }

 async function deleteUserPhoto() {
  setDeleteImageLoading(() => true)
  const response = await fetch("/api/user/edit/profile/photo", {
   method: "DELETE",
  })

  if (response.status !== 200) {
   const data = await response.json()
   toast.error(data.message)
   setDeleteImageLoading(() => false)
   return
  }

  update()
  setDeleteImageLoading(() => false)
  toast.success("Foto de perfil removida com sucesso")
  router.refresh()
 }

 async function updateUserProfile() {
  if (!image) return
  setImageLoading(() => true)

  const formData = new FormData()
  formData.append("image", image)

  const response = await fetch("/api/user/edit/profile/photo", {
   method: "PUT",
   body: formData,
  })

  if (response.status !== 200) {
   const data = await response.json()
   toast.error(data.message)
   setImageLoading(() => false)
   return
  }

  update()
  setImageLoading(() => false)
  toast.success("Foto de perfil atualizada com sucesso")
  setPreview(() => null)
  router.refresh()
 }

 async function updateUserInformation(event) {
  event.preventDefault()
  setInformationLoading(() => true)

  const response = await fetch("/api/user/edit/profile/information", {
   method: "PUT",
   body: JSON.stringify(userInformation),
   headers: { "Content-Type": "application/json" },
  })

  if (response.status !== 200) {
   const data = await response.json()
   toast.error(data.message)
   setInformationLoading(() => false)
   return
  }

  update()
  setInformationLoading(() => false)
  toast.success("Informações atualizadas com sucesso")
  router.refresh()
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
     <form onSubmit={updateUserInformation}>
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
           disabled={imageLoading}
           type="button"
           className="border bg-segunda text-white box-border normal-case cursor-pointer inline-flex items-center text-center text-xs leading-4 font-medium bg-none m-0 px-3 py-2 rounded-lg border-solid"
          >
           {imageLoading && <CirculoCarregamentoComponent />}
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
            disabled={deleteImageLoading}
            type="button"
            className="border bg-red-500 text-white box-border normal-case cursor-pointer inline-flex items-center text-center text-xs leading-4 font-medium bg-none m-0 px-3 py-2 rounded-lg border-solid"
           >
            {deleteImageLoading && <CirculoCarregamentoComponent />}
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
        <div class="flex">
         <span class="self-stretch inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          @
         </span>
         <input
          type="text"
          class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={session?.user?.username !== "Usuário não informado" && session?.user?.username || "meu_usuario"}
          disabled={session?.user?.username && session?.user?.username !== "Usuário não informado"}
          onChange={(e) => changeInput("username", e.target.value)}
         />
        </div>
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
         defaultValue={session?.user?.biography}
         value={userInformation.biography}
         onChange={(e) => changeInput("biography", e.target.value)}
        />
       </div>
      </div>
      <div className="flex items-center space-x-4">
       <button
        disabled={informationLoading}
        type="submit"
        className="text-white flex items-center bg-segunda focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
       >
        {informationLoading && <CirculoCarregamentoComponent />}
        Terminar edição
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 )
}
