import { createBrowserRouter } from "react-router-dom";
import TelaLogin from "./Pages/TelaLogin/TelaLogin";
import TelaCadastro from "./Pages/TelaCadastro/TelaCadastro";
import BarraEsquerda from "./componentes/BarraEsquerda";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<TelaLogin />
    },
    {
        path:"/cadastro",
        element:<TelaCadastro />
    },
    {
        path:"/home",
        element:<BarraEsquerda 
        nome="matheus" 
        nomeusuario="matheus123"
        posts="5"
        seguidores="1.000"
        nota="10"
        areas="Transcista, cozinheiro..."
        />
        
    }
])