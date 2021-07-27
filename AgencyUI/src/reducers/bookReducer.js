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

function bookCreateReducer(state={},action){
    switch(action.type){
        case BOOK_CREATE_REQUEST:
            return {loading:true};
            case BOOK_CREATE_SUCCESS:
                return {loading:false,bookings:action.payload,success:true};
                case BOOK_CREATE_FAIL:
                    return {loading:false, error:action.payload};
                    default:
                        return state;


    }
}

  
  
  function bookDetailsReducer(state = {
    booking: {
      properties: [],
      payment: {}
    }
  }, action) {
    switch (action.type) {
      case BOOK_DETAILS_REQUEST:
        return { loading: true };
      case BOOK_DETAILS_SUCCESS:
        return { loading: false, bookings: action.payload };
      case BOOK_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  
  function myBookingsListReducer(state = {
    bookings: []
  }, action) {
    switch (action.type) {
      case MY_BOOKINGS_LIST_REQUEST:
        return { loading: true };
      case MY_BOOKINGS_LIST_SUCCESS:
        return { loading: false, bookings: action.payload };
      case MY_BOOKINGS_LIST_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  
  
  function bookPayReducer(state = {
    order: {
      properties: [],
      payment: {}
    }
  }, action) {
    switch (action.type) {
      case BOOK_PAY_REQUEST:
        return { loading: true };
      case BOOK_PAY_SUCCESS:
        return { loading: false, success: true };
      case BOOK_PAY_SUCCESS:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  function bookingcancelReducer(state = {
    bookings: {
      properties: [],
      payment: {}
    }
  }, action) {
    switch (action.type) {
      case BOOK_DELETE_REQUEST:
        return { loading: true };
      case BOOK_DELETE_SUCCESS:
        return { loading: false, success: true };
      case BOOK_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }  
  export  {
      bookListReducer,
      bookingcancelReducer,
      bookDetailsReducer,
      bookPayReducer,
      myBookingsListReducer,
      bookCreateReducer
  }