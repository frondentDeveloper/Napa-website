import {
  SHOW_ALL_RESUMES,
  SHOW_COVER_LETTERS,
  SHOW_DOCUMENTS,
  SHOW_DONE_RESUMES,
} from "../actionTypes/resumesActionTypes";

export function showAllResumes() {
  return (dispatch) => {
    dispatch({ type: SHOW_ALL_RESUMES })
  }
}

export function showCoverLetters() {
  return (dispatch) => {
    dispatch({ type: SHOW_COVER_LETTERS })
  }
}

export function showDocuments() {
  return (dispatch) => {
    dispatch({ type: SHOW_DOCUMENTS })
  }
}

export function showDoneResumes() {
  return (dispatch) => {
    dispatch({ type: SHOW_DONE_RESUMES })
  }
}