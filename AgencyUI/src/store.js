import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
  propertyCreateReducer,
  propertyListReducer,
  propertyDetailsReducer,
  propertyDeleteReducer,
  PropertyUpdateReducer
  
} from './reducers/propertyReducer';
  
import {bookCreateReducer,
    bookDetailsReducer,
    bookListReducer,
    bookPayReducer,
    bookingcancelReducer,
    myBookingsListReducer
} from './reducers/bookReducer'


import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
} from './reducers/userReducers';

import {
    invoiceDetailsReducer,
    listInvoicesReducer,
    myInvoicesReducer
} from './reducers/invoiceReducer'

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  
  userSignin: { userInfo },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  propertyCreate:propertyCreateReducer,
  propertylist:propertyListReducer,
  propertyUpdate:PropertyUpdateReducer,
  propertyDetails:propertyDetailsReducer,
  propertyDelete:propertyDeleteReducer,
  bookcreate:bookCreateReducer,
  bookDetails:bookDetailsReducer,
  bookinglist:bookListReducer,
  cancelbookings:bookingcancelReducer,
  bookingpay:bookPayReducer,
  mybookings:myBookingsListReducer,
  invoicelist:listInvoicesReducer,
  myInvoices:myInvoicesReducer,
  invoicedetails:invoiceDetailsReducer,
  userUpdate: userUpdateReducer,
});
// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
