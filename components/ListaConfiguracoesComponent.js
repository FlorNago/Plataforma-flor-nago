"use client"

import { useRef, useState } from "react"

const FaqsCard = ({ faqsList, idx }) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden"
            key={idx}
        >
            <h4 className="cursor-pointer pb-5 flex items-center text-lg text-gray-700 font-medium uppercase" onClick={handleOpenAnswer}>
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div className="px-4">
                    {faqsList.inputs.map((inputInformation) => {
                        if (inputInformation.type === "button") {
                            return <div>
                                <label
                                    for={inputInformation.name}
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    {inputInformation.text}
                                </label>

                                <button
                                    id={inputInformation.name}
                                    className="text-white bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    {inputInformation.text}
                                </button>
                            </div>
                        }

                        return (
                            <div>
                                <label
                                    for={inputInformation.name}
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    {inputInformation.text}
                                </label>

                                <input
                                    id={inputInformation.name}
                                    type={inputInformation.type}
                                    placeholder={inputInformation.placeholder}
                                    class="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "Alterar sua senha",
            inputs: [
                { type: "password", text: "Senha", placeholder: "Senha", name: "password" },
                { type: "password", text: "Confirme sua senha", placeholder: "Confirmar sua nova senha", name: "confirmPassword" },
            ]
        },
        {
            q: "Alterar seu email",
            inputs: [
                { type: "email", text: "E-mail", placeholder: "Email", name: "email" }
            ]
        },
        {
            q: "Deletar sua conta",
            inputs: [
                { type: "button", text: "Deletar conta", placeholder: "Deletar conta", name: "delete" }
            ]
        },
    ]

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12">
            <div className="mt-14 max-w-md">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}