import { createStore, combineReducers ,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import customerReducer from "../Reducers/customerReducer"
import productReducer from "../Reducers/productReducer"
import loggedInReducer from "../Reducers/loggedInReducer"
import billReducer from "../Reducers/billReducer"
import accountReducer from "../Reducers/accountReducer"

const configureStore = ()=>{
    const store = createStore(combineReducers({
        customers : customerReducer,
        products : productReducer,
        bills : billReducer,
        account : accountReducer,
        loggedIn : loggedInReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore