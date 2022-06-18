import {
  SET_AUTH_EMAIL,
  SET_AUTH_PASSWORD,
  SAVE_NEW_WORK_EXPERIENCE,
  REMOVE_SAVED_WORK_EXPERIENCE,
  WORK_EXPERIENCE_EDIT_MODAL_VISIBLE,
  SAVE_EDITED_WORK_EXPERIENCE,
  ADD_INITIAL_VALUE,
  ADD_ADDRESS_INITIAL_VALUE,
} from "../actionTypes/authActionTypes";

export function setAuthEmailValue(data) {
  return (dispatch) => {
    dispatch({type: SET_AUTH_EMAIL, data})
  }
}

export function setAuthPasswordValue(data) {
  return (dispatch) => {
    dispatch({type: SET_AUTH_PASSWORD, data})
  }
}

export function addInitialValues(data) {
  return (dispatch) => {
    dispatch({type: ADD_INITIAL_VALUE, data})
  }
}

export function addAddressInitialValues(data) {
  return (dispatch)  => {
    dispatch({type: ADD_ADDRESS_INITIAL_VALUE, data})
  }
}

export function saveNewWorkExperience(data) {
  return (dispatch) => {
    dispatch({type: SAVE_NEW_WORK_EXPERIENCE, data})
  }
}

export function removeSavedWorkExperience(id) {
  return (dispatch) => {
    dispatch({type: REMOVE_SAVED_WORK_EXPERIENCE, id})
  }
}

export function setWorkExperienceEditModalVisible(item) {
  return (dispatch) => {
    dispatch({type: WORK_EXPERIENCE_EDIT_MODAL_VISIBLE, item})
  }
}

export function saveEditedWorkExperience(data) {
  return (dispatch) => {
    dispatch({type: SAVE_EDITED_WORK_EXPERIENCE, data})
  }
}