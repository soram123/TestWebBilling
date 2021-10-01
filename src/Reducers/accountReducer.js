const account = {} 

const accountReducer = (state=account, action)=>{
    switch(action.type){
        case "GET_ACCOUNT": {
         
            return {...state , ...action.payload }
        }
        default: {
            return {...state}
        }

    }
}
export default accountReducer