import createReducer from "../helpers/createReducer";
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_ABOUT_YOURSELF_NEW_SKILLS,
  SET_ABOUT_YOURSELF_NEW_LANGUAGE,
  ADD_ABOUT_YOURSELF_NEW_LANGUAGE,
  REMOVE_ABOUT_YOURSELF_ADDED_LANGUAGE,
  ADD_CONTACTS_SOCIAL_NETWORKS,
  REMOVE_CONTACTS_ADDED_SOCIAL_NETWORKS,
  SET_INTERESTS_NEW_HOBBIES,
  ADD_INTERESTS_NEW_HOBBIES,
  ADD_EDUCATION,
  EDUCATION_EDIT_MODAL_VISIBLE,
  SAVE_EDITED_EDUCATION,
  REMOVE_SAVED_EDUCATION,
  REMOVE_SAVED_INTEREST,
} from "../actionTypes/appendActionTypes";

const defaultState = {
  initialHobbiesValue: "",
  initialLanguageValue: "",
  skills: [],
  languages: [],
  about: "",
  educations: [],
  contacts: [],
  interests: [],
  socialNetworks: [
    {id: uuidv4(), networkLink: "", src: "./images/whatsapp.png", networkIcon: "./images/whatsapp-link.png", alt: "whatsApp"},
    {id: uuidv4(), networkLink: "", src: "./images/facebook.png", networkIcon: "./images/facebook-link.png", alt: "facebook"},
    {id: uuidv4(), networkLink: "", src: "./images/instagram.png",networkIcon: "./images/instagram-link.png", alt: "instagram"},
    {id: uuidv4(), networkLink: "", src: "./images/telegram.png", networkIcon: "./images/telegram-link.png", alt: "telegram"},
    {id: uuidv4(), networkLink: "", src: "./images/github.png",   networkIcon: "./images/github-link.png", alt: "github"},
    {id: uuidv4(), networkLink: "", src: "./images/linkedin.png", networkIcon: "./images/linkedin-link.png", alt: "linkedin"},
  ],
  addedSocialNetworks: [],
  isWritten: false,
  educationEditModalVisible: false,
  item: {},
}

const reducers = {
  [ADD_ABOUT_YOURSELF_NEW_SKILLS](state, {data}) {
    const {skills, isWritten, about} = state;
    return {
      ...state,
      skills: data.skill,
      about: data.about,
      isWritten: true
    }
  },

  [SET_ABOUT_YOURSELF_NEW_LANGUAGE](state, {data}) {
    return {
      ...state,
      initialLanguageValue: data
    }
  },

  [ADD_ABOUT_YOURSELF_NEW_LANGUAGE](state) {
    const {initialLanguageValue, languages} = state
    if (initialLanguageValue.trim() === "") {
      alert("Please enter the language you can speak!")
      return {
        ...state
      }
    }
    const _newLanguage = {id: uuidv4(), title: initialLanguageValue}
    return {
      ...state,
      languages: [...languages, _newLanguage],
      initialLanguageValue: state.initialLanguageValue = "",
    }
  },

  [REMOVE_ABOUT_YOURSELF_ADDED_LANGUAGE](state, {id}) {
    const _filteredLang = state.languages.filter(language => language.id !== id)
    return {
      ...state,
      languages: _filteredLang
    }
  },

  [ADD_EDUCATION](state, {data}) {
    const _education = {...data, id: uuidv4()};
    return {
      ...state,
      educations: [...state.educations, _education]
    }
  },

  [EDUCATION_EDIT_MODAL_VISIBLE](state, {item}) {
    return {
      ...state,
      item,
      educationEditModalVisible: !state.educationEditModalVisible
    }
  },

  [SAVE_EDITED_EDUCATION](state, {data}) {
    const _edited = state.educations.map(education => {
      if (education.id === state.item.id) {
        education.school = data.school
        education.degree = data.degree
        education.studyType = data.studyType
        education.location = data.location;
        education.startDate = data.startDate
        education.endDate = data.endDate
      }
      return education
    })
    return {
      ...state,
      educations: _edited,
      item: {},
      educationEditModalVisible: false
    }
  },

  [REMOVE_SAVED_EDUCATION](state, {id}) {
    const _education = state.educations.filter(item => item.id !== id)
    return {
      ...state,
      educations: _education
    }
  },

  [ADD_CONTACTS_SOCIAL_NETWORKS](state, {obj}) {
    const _newSocialNetworks = state.socialNetworks.filter(item => item.id !== obj.id)
    return {
      ...state,
      socialNetworks: _newSocialNetworks,
      addedSocialNetworks: [...state.addedSocialNetworks, obj]
    }
  },
  [REMOVE_CONTACTS_ADDED_SOCIAL_NETWORKS](state, {obj}) {
    const _updatedNetworks = state.addedSocialNetworks.filter(item => item.id !== obj.id)
    return {
      ...state,
      addedSocialNetworks: _updatedNetworks,
      socialNetworks: [...state.socialNetworks, obj]
    }
  },

  [SET_INTERESTS_NEW_HOBBIES](state, {data}) {
    return {
      ...state,
      initialHobbiesValue: data
    }
  },

  [ADD_INTERESTS_NEW_HOBBIES](state) {
    const {initialHobbiesValue, interests} = state
    if (initialHobbiesValue.trim() === "") {
      return {
        ...state
      }
    }

    const _newHobby = {id: uuidv4(), title: initialHobbiesValue}
    return {
      ...state,
      interests: [...interests, _newHobby],
      initialHobbiesValue: state.initialHobbiesValue = ""
    }
  },
  [REMOVE_SAVED_INTEREST](state, {id}) {
    const _filteredInterest = state.interests.filter(interest => interest.id !== id)
    return {
      ...state,
      interests: _filteredInterest
    }
  },
}

export default createReducer(defaultState, reducers)