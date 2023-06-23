"use client"

import { useState } from "react"

import InputMask from "react-input-mask-next"
import { toast } from "react-toastify"

const listaDeSegmentos = ["Tranças", "Acessórios", "Maquiagem", "Cuidados"]

export default function FormularioRegistro() {
 const [isProfessional, setIsProfessional] = useState(false)
 const [formularioRegistro, setFormularioRegistro] = useState({
  email: "",
  senha: "",
  confirmarSenha: "",
  dataNascimento: "",
  cpf: "",
  instagram: "",
  segmento: [],
  celular: "",
 })

 async function onSubmit(event) {
  event.preventDefault()

  toast.warn("Realizando cadastro, aguarde...")

  const response = await fetch("/api/registro", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    ...formularioRegistro,
    profissional: isProfessional,
   }),
  })

  if (response.status !== 201) {
   const data = await response.json()
   toast.error(data.message)
   return
  }

  toast.success("Cadastro realizado com sucesso!")
 }

 function onChange(propriedade, valor) {
  setFormularioRegistro((valoresAnterior) => {
   return { ...valoresAnterior, [propriedade]: valor }
  })
 }

 return (
  <form onSubmit={onSubmit} className="mt-8 grid grid-cols-6 gap-6">
   <div className="col-span-6 flex justify-between max-md:grid max-md:gap-4 max-md:place-content-stretch">
    <button
     type="button"
     onClick={() => setIsProfessional(false)}
     className={`inline-block shrink-0 rounded-md border uppercase font-bold border-primaria max-md:place-self-stretch px-12 py-3 text-sm transition ${
      !isProfessional ? "bg-primaria text-white" : "text-primaria"
     }`}
    >
     Usuário
    </button>

    <button
     type="button"
     onClick={() => setIsProfessional(true)}
     className={`inline-block shrink-0 rounded-md border uppercase font-bold border-primaria px-12 py-3 text-sm transition ${
      isProfessional ? "bg-primaria text-white" : "text-primaria"
     }`}
    >
     Profissional
    </button>
   </div>
   <div className="col-span-6">
    <label htmlFor="Email" className="block text-sm font-medium text-segunda">
     Email
    </label>

    <input
     type="email"
     id="Email"
     name="email"
     className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
     onChange={(event) => onChange("email", event.target.value)}
    />
   </div>

   <div className="col-span-6 sm:col-span-3">
    <label
     htmlFor="Password"
     className="block text-sm font-medium text-segunda"
    >
     Senha
    </label>

    <input
     type="password"
     id="Password"
     name="password"
     className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
     onChange={(event) => onChange("senha", event.target.value)}
    />
   </div>

   <div className="col-span-6 sm:col-span-3">
    <label
     htmlFor="PasswordConfirmation"
     className="block text-sm font-medium text-segunda"
    >
     Confirme sua senha
    </label>

    <input
     type="password"
     id="PasswordConfirmation"
     name="password_confirmation"
     className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
     onChange={(event) => onChange("confirmarSenha", event.target.value)}
    />
   </div>
   <div className="col-span-6 sm:col-span-3">
    <label
     htmlFor="data_nascimento"
     className="block text-sm font-medium text-segunda"
    >
     Data de Nascimento
    </label>

    <input
     type="date"
     id="data_nascimento"
     name="data_nascimento"
     className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
     onChange={(event) => onChange("dataNascimento", event.target.value)}
    />
   </div>
   {isProfessional && (
    <>
     <div className="col-span-6 sm:col-span-3">
      <label htmlFor="cpf" className="block text-sm font-medium text-segunda">
       CPF:
      </label>
      <InputMask
       type="text"
       placeholder="999.999.999-99"
       mask="999.999.999-99"
       name="cpf"
       id="cpf"
       className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm form-number"
       onChange={(event) => onChange("cpf", event.target.value)}
      />
     </div>

     <div className="col-span-6 sm:col-span-3">
      <label
       htmlFor="instagram"
       className="block text-sm font-medium text-segunda"
      >
       Instagram:
      </label>

      <input
       type="text"
       id="instagram"
       name="instagram"
       className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
       onChange={(event) => onChange("instagram", event.target.value)}
      />
     </div>

     <div className="col-span-6 sm:col-span-3">
      <label
       htmlFor="celular"
       className="block text-sm font-medium text-segunda"
      >
       Número de celular:
      </label>

      <InputMask
       type="tel"
       placeholder="(99) 99999-9999"
       mask="(99) 99999-9999"
       name="celular"
       id="celular"
       className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm form-numer"
       onChange={(event) => onChange("celular", event.target.value)}
      />
     </div>

     <div className="col-span-6 grid">
      <ul className="mt-6 space-y-3">
       <p className="block text-sm font-medium text-segunda text-center">
        Seus segmentos
       </p>
       {listaDeSegmentos.map((item, index) => (
        <li key={index}>
         <label htmlFor={item.name} className="block relative">
          <input
           id={index}
           type="checkbox"
           name="payment"
           defaultChecked={false}
           className="sr-only peer"
           onChange={(e) => {
            if (!e.target.checked)
             return setFormularioRegistro((valoresAnterior) => {
              return {
               ...valoresAnterior,
               ["segmento"]: valoresAnterior.segmento.filter(
                (elemento) => elemento !== item
               ),
              }
             })

            setFormularioRegistro((valoresAnterior) => {
             return {
              ...valoresAnterior,
              ["segmento"]: [...valoresAnterior.segmento, item],
             }
            })
           }}
          />
          <div className="w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-segunda peer-checked:ring-2 duration-200">
           <div className="pl-7">
            <h3 className="leading-none text-gray-800 font-medium">{item}</h3>
           </div>
          </div>
          <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-segunda w-4 h-4 rounded-full"></span>
         </label>
        </li>
       ))}
      </ul>
     </div>
    </>
   )}

   <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
    <button className="inline-block shrink-0 rounded-md border border-segunda bg-segunda px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-segunda focus:outline-none focus:ring active:text-segunda">
     Crie sua conta
    </button>

    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
     Você já tem uma conta?{" "}
     <a href="/login" className="text-segundo-600 underline">
      Realizar login
     </a>
    </p>
   </div>
  </form>
 )
}
