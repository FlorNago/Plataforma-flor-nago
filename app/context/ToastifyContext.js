"use client"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function ToastContextProvider({ children }) {
    return (
        <>
        {children}
        <ToastContainer /> 
        </>
    )
}