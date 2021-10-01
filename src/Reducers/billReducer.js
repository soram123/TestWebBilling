const bills = [] 

const billReducer = (state=bills, action)=>{
    switch(action.type){
        case "GET_BILLS": {
         
            return [...state , ...action.payload ]
        }
        case "DELETE_BILLS": {
            return state.filter((bills)=>{
                return bills._id!==action.payload
            })
        }
        case "ADD_BILLS" : {
            return [...state, {...action.payload}]
        }
        default: {
            return [...state]
        }

    }
}
export default billReducer