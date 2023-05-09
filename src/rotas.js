import { createBrowserRouter } from "react-router-dom";
import TelaLogin from "./Pages/TelaLogin/TelaLogin";
import TelaCadastro from "./Pages/TelaCadastro/TelaCadastro";
import LandingPage from "./Pages/LandingPage/LandingPage";

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
        element:<LandingPage />
    }
])