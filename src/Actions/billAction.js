import axios from "axios"
import { message } from "antd"

export const FirstGetBills = (headers)=>{
        
    return (dispatch)=>{
        // const dispatch = useDispatch()
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',headers)
            .then((response)=>{
              const result = response.data 
           //  console.log("result",result)
             dispatch(GetBills(result))
            
         })
         .catch((err)=>{
             message.error(err.message)
         })
   
}
    }
       

export const GetBills = (result)=>{

    return {
        type : "GET_BILLS",
        payload: result

    }
}

export const DeleteBills = (result)=>{

    return {
        type: "DELETE_BILLS",
        payload: result
    }
}

export const AddBills = (result)=>{

    return {
        type : "ADD_BILLS",
        payload : result
    }
}