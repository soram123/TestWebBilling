import axios from "axios"
import { message } from "antd"

export const FirstGetAccount = (headers)=>{
        
    return (dispatch)=>{
        // const dispatch = useDispatch()
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',headers)
            .then((response)=>{
              const result = response.data 
             console.log("result",result)
             dispatch(GetAccount(result))
            
         })
         .catch((err)=>{
             message.error(err.message)
         })
   
}
    }
       

export const GetAccount = (result)=>{

    return {
        type : "GET_ACCOUNT",
        payload: result

    }
}