import {PROPERTY_ADD_REQUEST,PROPERTY_ADD_SUCCESS,PROPERTY_ADD_FAIL,PROPERTY_LIST_REQUEST,PROPERTY_LIST_SUCCESS,PROPERTY_LIST_FAIL,PROPERTY_UPDATE_REQUEST,PROPERTY_UPDATE_SUCCESS,PROPERTY_UPDATE_FAIL,PROPERTY_DETAILS_REQUEST,PROPERTY_DETAILS_SUCCESS,PROPERTY_DETAILS_FAIL,PROPERTY_DELETE_REQUEST,PROPERTY_DELETE_SUCCESS,PROPERTY_DELETE_FAIL,PROPERTY_SAVE_REQUEST,PROPERTY_SAVE_SUCCESS,PROPERTY_SAVE_FAIL,PROPERTY_REVIEW_SAVE_REQUEST,PROPERTY_REVIEW_SAVE_FAIL,PROPERTY_REVIEW_SAVE_RESET,PROPERTY_REVIEW_SAVE_SUCCESS} from "../constants/PropertyConstants";

function propertyListReducer(state = { properties: [] }, action) {
    switch (action.type) {
      case PROPERTY_LIST_REQUEST:
        return { loading: true, properties: [] };
      case PROPERTY_LIST_SUCCESS:
        return { loading: false, properties: action.payload };
      case PROPERTY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  

  function PropertyUpdateReducer(state={}, action){
    switch (action.type){
        case PROPERTY_UPDATE_REQUEST:
            return {loading: true};
            case PROPERTY_UPDATE_SUCCESS:
                return {loading: false, propertyInfo:action.action.payload};
                case PROPERTY_UPDATE_FAIL:
                    return { loading: false,error:action.action.payload};
                    default: return state;
    }

  }


  function propertyDetailsReducer(state = { product: { reviews: [] } }, action) {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function propertyDeleteReducer(state = { property: {} }, action) {
    switch (action.type) {
      case PROPERTY_DELETE_REQUEST:
        return { loading: true };
      case PROPERTY_DELETE_SUCCESS:
        return { loading: false, property: action.payload, success: true };
      case PROPERTY_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function productSaveReducer(state = { product: {} }, action) {
    switch (action.type) {
      case PRODUCT_SAVE_REQUEST:
        return { loading: true };
      case PRODUCT_SAVE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case PRODUCT_SAVE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function productReviewSaveReducer(state = {}, action) {
    switch (action.type) {
      case PRODUCT_REVIEW_SAVE_REQUEST:
        return { loading: true };
      case PRODUCT_REVIEW_SAVE_SUCCESS:
        return { loading: false, review: action.payload, success: true };
      case PRODUCT_REVIEW_SAVE_FAIL:
        return { loading: false, errror: action.payload };
      case PRODUCT_REVIEW_SAVE_RESET:
        return {};
      default:
        return state;
    }
  }
  
  export {
    productListReducer,
    productDetailsReducer,
    productSaveReducer,
    productDeleteReducer,
    productReviewSaveReducer,
  };
  