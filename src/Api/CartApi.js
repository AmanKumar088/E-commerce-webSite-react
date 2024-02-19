import SetStorage, { GetToken } from "../Component/Constent/Storage";
import { ApiUrl } from "../Component/Constent/Url";
import { Route } from "../Component/Route/Route";

export default async function AddCartApi(data){
    console.log(data)
    const res=await fetch(`${ApiUrl}${Route.AddCart}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`bearer ${GetToken()}`
        },
        body:JSON.stringify(data)
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

export async function DeleteCartApi(id){
    console.log(id)
    const res=await fetch(`${ApiUrl}${Route.DeleteCart}${id}`,{
        method:"delete",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`bearer${GetToken()}`
        }
    })
    return await res.json()
}