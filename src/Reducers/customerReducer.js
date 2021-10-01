const customers = []


const customerReducer = (state=customers, action)=>{
    switch(action.type){
        case "ADD_CUSTOMER":{
           // console.log('add customer from reducer')
            return [...state, {...action.payload}]
        }
        case "REMOVE_CUSTOMER":{
            return state.filter((cust)=>{
                return cust._id!==action.payload
            })
        }
        case "EDIT_CUSTOMER":{
           console.log('customer reducer', action.payload)
           //console.log(state)
            return state.map((cus)=>{
                if(cus._id==action.payload._id){
                    return {...cus, ...action.payload}
                }
               else {
                    return {...cus}
               }
            }) 
           
        }
        case 'GET_CUSTOMERS':{
           // console.log('get customer', action.payload)
            return [...state , ...action.payload ]
        }
        default: {
            return [...state]
        }
    }
}
export default customerReducer