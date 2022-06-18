import {
    ADD_SIZE_CIRCLE,
    SHOW_RESUME,
    SHOW_TEMPLATE,
    SIGNED_NEXT_WIZARD_STEP,
    SIGNED_BACK_WIZARD_STEP,
    DISPLAY_NONE_CIRCLE,
    HOME_CIRCLE_VISIBLE,
    RESUME_NUMBER,
    RESUME_COLOR,
    RESUME_COLOR_BOX
} from "../actionTypes/careerActionTypes";

export function setResumeColor(data) {
    return (dispatch) => {
        dispatch({type: RESUME_COLOR, data})
    }
}
export function setResumeColorBox(data) {
    return (dispatch) => {
        dispatch({type: RESUME_COLOR_BOX, data})
    }
}

export function setResumeNumber(data) {
    return (dispatch) => {
        dispatch({type: RESUME_NUMBER, data})
    }
}

export function addSize() {
    return (dispatch) => {
        dispatch({type: ADD_SIZE_CIRCLE})
    }
}
export function homeCircleVisible(size) {
    return (dispatch) => {
        dispatch({type:HOME_CIRCLE_VISIBLE, size})
    }
}

export function displayCircle() {
  return (dispatch) => {
    dispatch({type: DISPLAY_NONE_CIRCLE})
  }
}

export function showResume() {
    return (dispatch) => {
        dispatch({type: SHOW_RESUME})
    }
}

export function showTemplates() {
    return (dispatch) => {
        dispatch({type: SHOW_TEMPLATE})
    }
}

export function signedWizardNextSteps() {
    return (dispatch) => {
        dispatch({type: SIGNED_NEXT_WIZARD_STEP})
    }
}

export function signedWizardBackSteps() {
    return (dispatch) => {
        dispatch({type: SIGNED_BACK_WIZARD_STEP})
    }
}