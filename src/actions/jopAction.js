import {INITIAL_DESCRIPTION, INITIAL_SKILLS, INITIAL_VALUE} from "../actionTypes/jopActionTypes";

export function jobInitialValues(data) {
    return (dispatch) => {
        dispatch({type: INITIAL_VALUE, data})
    }
}

export function jobDescriptionValues(data) {
    return(dispatch) => {
        dispatch({type: INITIAL_DESCRIPTION, data})
    }
}

export function jobSkillsValues(data) {
    return(dispatch) => {
        dispatch({type: INITIAL_SKILLS, data})
    }
}