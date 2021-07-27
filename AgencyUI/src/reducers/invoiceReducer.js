import {INVOICES_LIST_REQUEST,INVOICES_LIST_SUCCESS,INVOICES_DETAILS_SUCCESS,INVOICES_DETAILS_REQUEST,INVOICES_LIST_FAIL,INVOICES_DETAILS_FAIL,MY_INVOICES_LIST_FAIL,MY_INVOICES_LIST_REQUEST,MY_INVOICES_LIST_SUCCESS} from "../constants/invoiceConstants";

function listInvoicesReducer(state={invoices:[]},action){
    switch(action.type){
        case INVOICES_LIST_REQUEST:
            return {loading:true, invoices:[]};
            case INVOICES_LIST_SUCCESS:
                return {loading:false, invoices:action.payload};
                case INVOICES_LIST_FAIL:
                    return { loading:false,error:action.payload};
                    default:
                        return state;


    }
}

function invoiceDetailsReducer(state={invoices:{}},action){
    switch(action.type){
        case INVOICES_DETAILS_REQUEST:
            return {loading:true};
            case INVOICES_DETAILS_SUCCESS:
                return {loading: false, invoices:action.payload};
                case INVOICES_DETAILS_FAIL:
                    return {loading:false,error:action.payload};
                    default:
                        return state;
    }
}

function myInvoicesReducer(state={invoices:[]},action){
    switch(action.type){
        case MY_INVOICES_LIST_REQUEST:
            return {loading:true};
            case MY_INVOICES_LIST_SUCCESS:
                return {laoding:false,invoices:action.payload};
                case MY_INVOICES_LIST_FAIL:
                    return {loading: false,error:action.payload};
                    default:
                        return state;
    }
} 
export  {
    invoiceDetailsReducer,
    listInvoicesReducer,
    myInvoicesReducer
    
}