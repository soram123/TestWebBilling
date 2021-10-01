import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './Store/configureStore' 
import { FirstGetCustomers } from './Actions/customerAction';
import { FirstGetProducts } from './Actions/productAction'
import { FirstGetAccount } from './Actions/accountAction';
import { FirstGetBills }  from './Actions/billAction'

const store = configureStore()

const headers = {
    headers : {
        'Authorization' : "Bearer "+localStorage.getItem('token')
    }
}

store.subscribe(()=>{
   //console.log('state update', store.getState())
})

  store.dispatch(FirstGetCustomers(headers))
  store.dispatch(FirstGetProducts(headers))
  store.dispatch(FirstGetBills(headers))
  store.dispatch(FirstGetAccount(headers))
  
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
  
  ,
   document.getElementById('root')
)