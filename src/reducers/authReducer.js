import createReducer from "../helpers/createReducer";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
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


const defaultState = {
  authEmailInitialValue: "",
  authPasswordInitialValue: "",
  initialValue: {
    avatarInitialValue: "",
    firstNameInitialValue: "",
    emailInitialValue: "",
    lastNameInitialValue: "",
    phoneNumberInitialValue: "",
    positionInitialValue: "",
    degreeInitialValue: "",
    id: "",
    isWritten: false
  },
  addressInitialValue: {
    country: "",
    region: "",
    street: "",
    isWritten: false
  },
  savedWorkExperiences: [],
  workExperienceEditModalVisible: false,
  item: {}
};

const reducers = {

  [SET_AUTH_EMAIL](state, {data}) {
    return {
      ...state,
      authEmailInitialValue: data,
    }
  },
  [SET_AUTH_PASSWORD](state, {data}) {
    return {
      ...state,
      authPasswordInitialValue: data,
    }
  },
  [ADD_INITIAL_VALUE](state, {data}) {
    const {initialValue} = state;
    return {
      ...state,
      initialValue: {
        avatarInitialValue: data.avatar,
        firstNameInitialValue: data.firstName,
        emailInitialValue: data.email,
        lastNameInitialValue: data.lastName,
        phoneNumberInitialValue: data.phoneNumber,
        positionInitialValue: data.position,
        id: data.id,
        degreeInitialValue: data.degree.label + ":",
        isWritten: true
      }
    }
  },
  [ADD_ADDRESS_INITIAL_VALUE](state, {data}) {
    const {addressInitialValue} = state;
    return {
      ...state,
      addressInitialValue: {
        country: data.country.label,
        region: data.region.label,
        street: data.street,
        isWritten: true
      }
    }
  },
  [SAVE_NEW_WORK_EXPERIENCE](state, {data}) {
    const _workExperience = {...data, id: uuidv4()}
    return {
      ...state,
      savedWorkExperiences: [...state.savedWorkExperiences, _workExperience],
    }
  },
  [REMOVE_SAVED_WORK_EXPERIENCE](state, {id}) {
    const _updatedWorkExperience = state.savedWorkExperiences.filter(item => item.id !== id)
    return {
      ...state,
      savedWorkExperiences: _updatedWorkExperience
    }
  },
  [WORK_EXPERIENCE_EDIT_MODAL_VISIBLE](state, {item}) {
    return {
      ...state,
      item,
      workExperienceEditModalVisible: !state.workExperienceEditModalVisible
    }
  },
  [SAVE_EDITED_WORK_EXPERIENCE](state, {data}) {
    const _edited = state.savedWorkExperiences.map(workExperience => {
      if (workExperience.id === state.item.id) {
        workExperience.companyName = data.companyName
        workExperience.job = data.job
        workExperience.startDate = data.startDate
        workExperience.endDate = data.endDate
        workExperience.description = data.description
      }
      return workExperience
    })
    return {
      ...state,
      savedWorkExperiences: _edited,
      item: {},
      workExperienceEditModalVisible: false
    }
  }

};

export default createReducer(defaultState, reducers);

