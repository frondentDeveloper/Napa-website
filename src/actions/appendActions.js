import
{
  ADD_ABOUT_YOURSELF_NEW_SKILLS,
  SET_ABOUT_YOURSELF_NEW_LANGUAGE,
  ADD_ABOUT_YOURSELF_NEW_LANGUAGE,
  REMOVE_ABOUT_YOURSELF_ADDED_LANGUAGE,
  SET_INTERESTS_NEW_HOBBIES,
  ADD_INTERESTS_NEW_HOBBIES,
  ADD_CONTACTS_SOCIAL_NETWORKS,
  REMOVE_CONTACTS_ADDED_SOCIAL_NETWORKS,
  ADD_EDUCATION,
  EDUCATION_EDIT_MODAL_VISIBLE,
  SAVE_EDITED_EDUCATION,
  REMOVE_SAVED_EDUCATION,
  REMOVE_SAVED_INTEREST
} from "../actionTypes/appendActionTypes";

export function addAboutYourselfNewSkills(data) {
  return (dispatch) => {
    dispatch({ type: ADD_ABOUT_YOURSELF_NEW_SKILLS, data})
  }
}

export function setAboutYourselfNewLanguage(data) {
  return (dispatch) => {
    dispatch({ type: SET_ABOUT_YOURSELF_NEW_LANGUAGE, data})
  }
}

export function addAboutYourselfNewLanguage() {
  return (dispatch) => {
    dispatch({ type: ADD_ABOUT_YOURSELF_NEW_LANGUAGE})
  }
}

export function removeAboutYourselfAddedLanguage(id) {
  return (dispatch) => {
    dispatch({ type: REMOVE_ABOUT_YOURSELF_ADDED_LANGUAGE, id})
  }
}

export function addEducation(data) {
  return (dispatch) => {
    dispatch({ type: ADD_EDUCATION, data })
  }
}

export function setEducationEditModalVisible(item) {
  return (dispatch) => {
    dispatch({type: EDUCATION_EDIT_MODAL_VISIBLE, item})
  }
}

export function saveEditedEducation(data) {
  return (dispatch) => {
    dispatch({type: SAVE_EDITED_EDUCATION, data})
  }
}

export function removeSavedEducation(id) {
  return (dispatch) => {
    dispatch({type: REMOVE_SAVED_EDUCATION, id})
  }
}

export function addContactsSocialNetworks(obj) {
  return (dispatch) => {
    dispatch({ type: ADD_CONTACTS_SOCIAL_NETWORKS, obj })
  }
}

export function removeAddedSocialNetworks(obj) {
  return (dispatch) => {
    dispatch({ type: REMOVE_CONTACTS_ADDED_SOCIAL_NETWORKS, obj})
  }
}

export function setInterestsNewHobbies(data) {
  return (dispatch) => {
    dispatch({ type: SET_INTERESTS_NEW_HOBBIES, data })
  }
}

export function addInterestsNewHobbies() {
  return (dispatch) => {
    dispatch({ type: ADD_INTERESTS_NEW_HOBBIES })
  }
}

export function removeInterests(id) {
  return (dispatch) => {
    dispatch({ type: REMOVE_SAVED_INTEREST, id})
  }
}