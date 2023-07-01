"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { toast } from "react-toastify"
import CirculoCarregamentoComponent from "./CirculoCarregamentoComponent"

export default function NovoPostComponent() {
   const router = useRouter()
 const fileInputRef = useRef()
 const [preview, setPreview] = useState(null)
 const [image, setImage] = useState(null)
 const [postInformation, setPostInformation] = useState({
  title: "",
  description: "",
 })
 const [loading, setLoading] = useState(false)

 function onFileSelected(event) {
  const { files } = event.target

  if (!files) return

  const previewURL = URL.createObjectURL(files[0])
  setImage(() => files[0])
  setPreview(() => previewURL)
 }

 function changeInformationValue(property, value) {
  setPostInformation((prev) => ({ ...prev, [property]: value }))
 }

 async function newPost() {
  setLoading(() => true)

  const formData = new FormData()
  formData.append("image", image)
  formData.append("data", JSON.stringify(postInformation))

  const response = await fetch("/api/post", {
   method: "POST",
   body: formData,
  })

  const data = await response.json()

  if (response.status !== 201) {
   setLoading(() => false)
   throw new Error(data.message)
  }

  router.push(`/sessao/publicacao/${data.message}`)
 }

 function formsSubmited(event) {
   event.preventDefault()

   toast.promise(
      newPost,
      {
         pending: "Publicando, por favor aguarde...",
         success: "Publicado com sucesso!",
         error: {
            render({ data }) {
               return data.message
            }
         }
      }
   )
 }

 return (
  <form
   className="bg-gray-100 rounded-lg p-8 grid gap-8 place-content-center"
   onSubmit={formsSubmited}
  >
   <div>
    <label
     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
     for="file_input"
    >
     Carregar imagem
    </label>
    <input
     class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
     aria-describedby="file_input_help"
     id="file_input"
     type="file"
     accept="image/*"
     onChange={onFileSelected}
     ref={fileInputRef}
    />
    <p
     class="mt-1 text-sm text-gray-500 dark:text-gray-300"
     id="file_input_help"
    >
     SVG, PNG, JPG or GIF (MAX. 800x400px).
    </p>
   </div>

   {preview && (
    <>
     <div className="place-self-center rounded-lg">
      <Image src={preview} alt="" width={640} height={480} />
     </div>

     <button
      onClick={() => {
       setPreview(null)
       setImage(() => null)
       fileInputRef.current.value = ""
      }}
      type="button"
      className="place-self-end text-red-500 border border-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
     >
      Remover prévia
     </button>
    </>
   )}

   <div>
    <label
     for="first_name"
     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
     Título
    </label>
    <input
     type="text"
     id="first_name"
     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     placeholder="Oque você quer compartilhar? :)"
     onChange={(event) => changeInformationValue("title", event.target.value)}
    />
   </div>

   <div>
    <label
     for="description"
     className="block mb-2 text-sm font-medium text-gray-900"
    >
     Descrição
    </label>
    <textarea
     id="description"
     rows="5"
     className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
     placeholder="Descreva a sua publicação"
     onChange={(event) =>
      changeInformationValue("description", event.target.value)
     }
    />
   </div>

   <button
    type="submit"
    disabled={loading}
    className="place-self-end flex items-center text-white bg-segunda focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
   >
    {loading && <CirculoCarregamentoComponent />}
    Publicar
   </button>
  </form>
 )
}
