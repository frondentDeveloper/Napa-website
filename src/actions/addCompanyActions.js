import {
    ADD_INITIAL_VALUE_COMPANY,
    EDIT_PASSWORD_COMPANY
} from "../actionTypes/addCompanyActionTypes";


export function addInitialValuesCompany(data) {
    return (dispatch) => {
        dispatch({type: ADD_INITIAL_VALUE_COMPANY, data})
    }
}

export function editPasswordText(data) {
    return (dispatch) => {
        dispatch({type: EDIT_PASSWORD_COMPANY, data})
    }
}