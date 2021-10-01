import axios from "axios"
import { message } from "antd"

export const AddProduct= (productData)=>{

    return {
        type: "ADD_PRODUCT",
        payload: productData
    }
}

export const RemoveProduct = (productId)=>{

    return {
        type: "REMOVE_PRODUCT",
        payload: productId
    }
}

export const EditProduct = (product)=>{
    
    return {
        type: "EDIT_PRODUCT",
        payload: product
        
    }
}

export const FirstGetProducts = (headers)=>{
        
    return (dispatch)=>{
        // const dispatch = useDispatch()
        axios.get('http://dct-billing-app.herokuapp.com/api/products',headers)
            .then((response)=>{
              const result = response.data 
           //  console.log("result",result)
             dispatch(GetProducts(result))
            
         })
         .catch((err)=>{
             message.error(err.message)
         })
   
}
    }
       

export const GetProducts = (result)=>{

    return {
        type : "GET_PRODUCTS",
        payload: result

    }
}