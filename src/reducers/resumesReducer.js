import createReducer from "../helpers/createReducer";
import {
  SHOW_ALL_RESUMES,
  SHOW_COVER_LETTERS,
  SHOW_DOCUMENTS,
  SHOW_DONE_RESUMES,
} from "../actionTypes/resumesActionTypes"

const defaultState = {
  allResumes: true,
  coverLetters: false,
  documents: false,
  doneResumes: false,
}

const reducers = {

  [SHOW_ALL_RESUMES](state) {
    return {
      ...state,
      allResumes: true,
      coverLetters: false,
      documents: false
    }
  },
  [SHOW_COVER_LETTERS](state) {
    return {
      ...state,
      allResumes: false,
      coverLetters: true,
      documents: false
    }
  },
  [SHOW_DOCUMENTS](state) {
    return {
      ...state,
      allResumes: false,
      coverLetters: false,
      documents: true
    }
  },
  [SHOW_DONE_RESUMES](state) {
    return {
      ...state,
      doneResumes: !state.doneResumes,
    }
  },
}

export default createReducer(defaultState, reducers);

