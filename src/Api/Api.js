import { ApiUrl } from "../Component/Constent/Url";
import { Route } from "../Component/Route/Route";

export default async function GetAllProductApi(){
    const response=await fetch(`${ApiUrl}${Route.GetAllProduct}`,{
        method:"get",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    return await response.json()
}

export async function SingleProductApi(id){
    const response=await fetch(`${ApiUrl}${Route.SingleProduct}${id}`,{
        method:"get",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    return await response.json()

}