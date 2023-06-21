"use client";

import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { signIn } from "next-auth/react";

import { BsEye, BsEyeFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function FormularioRegistro() {
  const router = useRouter();
  const [isProfessional, setIsProfessional] = useState(false);
  const [formularioRegistro, setFormularioRegistro] = useState({
    email: "",
    senha: "",
  });
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    signIn("credentials", { ...formularioRegistro, redirect: false }).then(
      ({ ok, error }) => {
        if (!ok) {
          // A função não executou com sucesso...
          alert("erro :(")
          return
        }
        if (error) {
          // Algum erro, ou erro de credenciais aconteceu
          alert(error)
          return
        }

        // Login foi sucesso
        router.push("/sessao")
      }
    );
  }

  function mudarValor(propriedade, valor) {
    setFormularioRegistro((valorAnterior) => {
      return {
        ...valorAnterior,
        [propriedade]: valor,
      };
    });
  }

  return (
    <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={onSubmit}>
      <div className="col-span-6 relative">
        <label htmlFor="Email" className="block text-sm font-medium text-primaria">
          Email
        </label>

        <input
          type="email"
          value={formularioRegistro.email}
          onChange={(event) => mudarValor("email", event.target.value)}
          id="Email"
          name="email"
          placeholder="nome@exemplo.com"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        <div className="text-primaria">
          <HiOutlineMail size={25} className="absolute right-4 top-[50%]" />
        </div>
      </div>

      <div className="col-span-6 relative">
        <label
          htmlFor="Password"
          className="block text-sm font-medium text-primaria"
          placeholder="Senha"
        >
          Senha
        </label>

        <input
          type={senhaVisivel ? "text" : "password"}
          value={formularioRegistro.senha}
          onChange={(event) => mudarValor("senha", event.target.value)}
          id="Password"
          name="password"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        <button
          onClick={() => setSenhaVisivel((valorAnterior) => !valorAnterior)}
          className="text-primaria"
        >
          {senhaVisivel ? (
            <BsEye size={25} className="absolute right-4 top-[50%]" />
          ) : (
            <BsEyeFill size={25} className="absolute right-4 top-[50%]" />
          )}
        </button>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block shrink-0 rounded-md border border-segunda bg-segunda px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-segunda focus:outline-none focus:ring active:text-segunda">
          Realizar login
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Não possui uma conta?{" "}
          <Link href="/signup" className="text-gray-700 underline">
            Registre-se
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
