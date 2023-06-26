"use client"

import { useState } from "react"
import { BsEye, BsEyeFill } from "react-icons/bs"

export default function SenhaInputComponent(props) {
 const [senhaVisivel, setSenhaVisivel] = useState(false)

 return (
  <div className="col-span-3 relative">
   <label
    htmlFor={props.id}
    className="block text-sm font-medium text-segunda"
    placeholder="Senha"
   >
    {props.text}
   </label>

   <input
    {...props}
    type={senhaVisivel ? "text" : "password"}
    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
   />
   <button
    onClick={() => setSenhaVisivel((valorAnterior) => !valorAnterior)}
    className="text-primaria"
    type="button"
   >
    {senhaVisivel ? (
     <BsEye size={25} className="absolute right-4 top-[50%]" />
    ) : (
     <BsEyeFill size={25} className="absolute right-4 top-[50%]" />
    )}
   </button>
  </div>
 )
}
