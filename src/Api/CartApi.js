import { GetToken } from "../Component/Constent/Storage";
import { ApiUrl } from "../Component/Constent/Url";
import { Route } from "../Component/Route/Route";

export default async function AddCartApi(){
    const res=await fetch(`${ApiUrl}${Route.AddCart}`,{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    return await res.json()
}

export async function GetCartApi(){
    const res=await fetch(`${ApiUrl}${Route.GetCart}`,{
        method:'get',
        headers:{
            "content-type":"application/json",
            "Authorization":`bearer ${GetToken()}`
        },
        body:JSON.stringify()
    })
    return await res.json()
}