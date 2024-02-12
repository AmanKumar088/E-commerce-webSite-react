import { GetStorage } from "../Component/Constent/Storage";
import { ApiUrl } from "../Component/Constent/Url";
import { Route } from "../Component/Route/Route";

export async function UserSignupApi(fromData){
    const response=await fetch(`${ApiUrl}${Route.SignupUser}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(fromData)
    })
    return await response.json()
}

export async function UserLoginApi(fromData){
    const response=await fetch(`${ApiUrl}${Route.LoginUser}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(fromData)
    })
    return await response.json()
}