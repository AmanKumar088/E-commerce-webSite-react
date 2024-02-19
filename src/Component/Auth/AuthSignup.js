import { useContext, useState } from "react"
import { UserSignupApi } from "../../Api/UserApi"
import { useNavigate } from "react-router-dom"
import SetStorage from "../Constent/Storage"
import { Account } from "../Context/CreateContext"
import { ToastContainer, toast } from 'react-toastify';

export default function AuthSignup(){
    const [data,setData]=useState({})
    const {signup}=useContext(Account)
    const naviget=useNavigate()
    const handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const handleSubmit=async (reload)=>{
        reload.preventDefault();
        console.log(data)
        const res= await UserSignupApi(data)
        if(res.status==="success"){
            toast.success( 'signup successfully👌', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            SetStorage(res)
            localStorage.setItem("token",res.token)
            signup(res)
            // console.log(res.token)
            setTimeout(()=>{
                naviget('/')
            },2000)
        }else{
            toast.error('user is not define!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }

    }

    return(
        <>
         <div className="outer">
            <div className="inner">
            <div className="middle_div">
                
                <form onSubmit={handleSubmit}>
                    <h1>Create New Account</h1>
                    <label>Enter_Your_name</label>
                    <p><input type="text" placeholder="Enter_Your_name" name="name" onChange={handleChange}></input></p>
                    
                    <label>Enter_Your_Email</label>
                    <p><input type="email" placeholder="Enter_Your_Email" name="email" onChange={handleChange}></input></p>
                    <label>Enter_Your_Moblie</label>
                    <p><input type="text" placeholder="Enter_Your_mobile" name="phone" onChange={handleChange}></input></p>
                    <label>Create_Your_Password</label>
                    <p><input type="password"  placeholder="Enter_Your_create_Password" name="password" onChange={handleChange}></input></p>
                    <p><button type="sumbit">Signup</button></p>
                    <p><button type="sumbit" >Login</button></p>
                </form>
             </div>
            </div>
        </div>

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