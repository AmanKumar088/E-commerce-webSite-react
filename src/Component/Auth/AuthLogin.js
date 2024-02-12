import { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserLoginApi } from "../../Api/UserApi";
import SetStorage from "../Constent/Storage";
import { Account } from "../Context/CreateContext";


export default function AuthLogin() {
    const [data,SetData]=useState({})
    const naviget=useNavigate()
    const {login}=useContext(Account)
    const handleChange=(event)=>{
        SetData({...data,[event.target.name]:event.target.value})
    }

    const handleSubmit=async (reload)=>{
        reload.preventDefault();
        console.log(data)
        const res=await UserLoginApi(data)
        if(res.status==="success"){
            console.log(res)
            window.alert('successfully login')
            SetStorage(res)
            localStorage.setItem("token",res.token)
            login(res)
            setTimeout(()=>{
            naviget('/')
            },2000)
        }
    }
    return (
        <>

            <div className="outer">
                <div className="inner">
                    <div className="middle_div">
                        <form onSubmit={handleSubmit}>
                            <h1>Log in page</h1>
                            <label>Enter_Your_Email</label>
                            <p><input type="email" name="email" placeholder="Enter-Your-Email"  onChange={handleChange}></input></p>
                            <label>Enter_Your_Password</label>
                            <p><input type="password" name="password" placeholder="Password" onChange={handleChange} ></input></p>
                            <p><button type="sumbit" >Login</button></p>
                            <p><button type="sumbit">Signup</button></p>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}