import axios from "axios"
import { message } from "antd"
import { useDispatch } from "react-redux"

export const AddCustomer = (customerData)=>{

    return {
        type: "ADD_CUSTOMER",
        payload: customerData
    }
}

export const RemoveCustomer = (customerId)=>{

    return {
        type: "REMOVE_CUSTOMER",
        payload: customerId
    }
}

export const EditCustomer = (customer)=>{
    
    return {
        type: "EDIT_CUSTOMER",
        payload: customer
        
    }
}

export const FirstGetCustomers = (headers)=>{
        
    return (dispatch)=>{
        // const dispatch = useDispatch()
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',headers)
            .then((response)=>{
              const result = response.data 
             //console.log("result",result)
             dispatch(GetCustomers(result))
            
         })
         .catch((err)=>{
             message.error(err.message)
         })
   
}
    }
       

export const GetCustomers = (result)=>{

    return {
        type : "GET_CUSTOMERS",
        payload: result

    }
}