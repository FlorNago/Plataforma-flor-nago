import ListaConfiguracoesComponent from "@/components/ListaConfiguracoesComponent"

export default function PageConfig() {
    return (
        <div className="p-4 flex flex-col gap-8 place-content-center max-sm:pb-32">
            <h1 className="text-center text-segunda font-bold text-3xl uppercase">Configurações</h1>
            <div className="sm:flex sm:justify-around">
                <div className="max-sm:hidden">
                    <p className="text-segunda border-segunda border-b-4 px-8">SUA CONTA</p>
                </div>

                <div>
                    <div>
                        <h2 className="text-segunda font-bold text-2xl">SUA CONTA</h2>
                        <p className="max-w-prose">Veja informações sobre sua conta, baixe um arquivo com seus dados ou saiba mais sobre as opções de desativação de conta.</p>
                    </div>

                    <ListaConfiguracoesComponent />
                </div>
            </div>
        </div>
    )
}