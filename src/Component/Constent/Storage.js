export default function SetStorage(data){
    localStorage.setItem("login-info",JSON.stringify(data))
}

export function GetStorage(){
    return JSON.parse(localStorage.getItem("login-info"))
}

export function  GetToken(){
    if(localStorage.getItem("login-info")){
        return JSON.parse(localStorage.getItem("login-info")).token
    }
     
}
export function hasStorage(){
    if(localStorage.getItem("login-info")){
        return true
    }else{
        return false
    }
}

export function clearStorage(){
    localStorage.clear()
}