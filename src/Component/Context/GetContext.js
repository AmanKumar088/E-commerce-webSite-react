import { useEffect, useState } from "react";
import { Account } from "./CreateContext";
import { GetStorage, clearStorage, hasStorage } from "../Constent/Storage";
import { useNavigate } from "react-router-dom";

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
    </>
   )
}