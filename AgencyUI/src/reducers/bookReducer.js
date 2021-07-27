import {BOOK_CREATE_REQUEST,BOOK_CREATE_SUCCESS,BOOK_CREATE_FAIL,BOOK_LIST_REQUEST,BOOK_LIST_SUCCESS,MY_BOOKINGS_LIST_FAIL,BOOK_DETAILS_REQUEST,BOOK_DETAILS_SUCCESS,BOOK_DETAILS_FAIL,BOOK_DELETE_REQUEST,BOOK_DELETE_SUCCESS,BOOK_DELETE_FAIL,BOOK_PAY_REQUEST,BOOK_PAY_SUCCESS,BOOK_PAY_FAIL,MY_BOOKINGS_LIST_REQUEST,MY_BOOKINGS_LIST_SUCCESS,BOOK_LIST_FAIL,} from "../constants/bookingsconstants";

function bookListReducer(state = {bookings:[]},action){
switch (action.type){
    case BOOK_LIST_REQUEST:
        return {loading: true, bookings:[]};
        case BOOK_LIST_SUCCESS:
            return {loading: false, bookings: action.payload};
            case BOOK_LIST_FAIL:
                return {loading: false,error:action.payload};
                default:
                    return state;

}

}


  
  
  function orderDetailsReducer(state = {
    order: {
      orderItems: [],
      shipping: {},
      payment: {}
    }
  }, action) {
    switch (action.type) {
      case ORDER_DETAILS_REQUEST:
        return { loading: true };
      case ORDER_DETAILS_SUCCESS:
        return { loading: false, order: action.payload };
      case ORDER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  
  function myOrderListReducer(state = {
    orders: []
  }, action) {
    switch (action.type) {
      case MY_ORDER_LIST_REQUEST:
        return { loading: true };
      case MY_ORDER_LIST_SUCCESS:
        return { loading: false, orders: action.payload };
      case MY_ORDER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  function orderListReducer(state = {
    orders: []
  }, action) {
    switch (action.type) {
      case ORDER_LIST_REQUEST:
        return { loading: true };
      case ORDER_LIST_SUCCESS:
        return { loading: false, orders: action.payload };
      case ORDER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  function orderPayReducer(state = {
    order: {
      orderItems: [],
      shipping: {},
      payment: {}
    }
  }, action) {
    switch (action.type) {
      case ORDER_PAY_REQUEST:
        return { loading: true };
      case ORDER_PAY_SUCCESS:
        return { loading: false, success: true };
      case ORDER_PAY_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  function orderDeleteReducer(state = {
    order: {
      orderItems: [],
      shipping: {},
      payment: {}
    }
  }, action) {
    switch (action.type) {
      case ORDER_DELETE_REQUEST:
        return { loading: true };
      case ORDER_DELETE_SUCCESS:
        return { loading: false, success: true };
      case ORDER_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }