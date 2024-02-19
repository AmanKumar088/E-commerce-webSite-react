import { useEffect, useState } from "react";
import { Account } from "./CreateContext";
import { GetStorage, clearStorage, hasStorage } from "../Constent/Storage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function GetContextData({children}){

    const [data,setData]=useState()
    const naviget=useNavigate()

    useEffect(()=>{
        if(hasStorage()){
            setData(GetStorage())
            naviget('/')
        }
    },[])

    function login(data){
        setData(data)
    }

    function signup(data){
        setData(data)
        console.log(setData(data))
    }

    function logout(){
        clearStorage()
        setData(null)
        toast.success( 'logout successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        naviget('/')
    }

    const ContextData={
        login:login,
        signup:signup,
        logout:logout,
        Logindata:data
    }


   return(
    <>
    
    <Account.Provider value={ContextData}>
        {children}
    </Account.Provider>


    <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
    </>
    

   )
}