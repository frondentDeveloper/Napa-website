import createReducer from "../helpers/createReducer";
import {v4 as uuidv4} from "uuid";
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
} from "../actionTypes/careerActionTypes"

const defaultState = {
    size: true,
    scrollDown: 0,
    displayNone: false,
    resumeNumbers: "",
    resumeColor: "#3E4149",
    resumeColorBox: [
        {
            id: uuidv4(),
            colorName: "#3E4149",
            changeColor: true
        },
        {
            id: uuidv4(),
            colorName: "#FF7E67",
            changeColor: false
        },
        {
            id: uuidv4(),
            colorName: "#1FAB89",
            changeColor: false
        },
        {
            id: uuidv4(),
            colorName: "#BE9FE1",
            changeColor: false
        },
        {
            id: uuidv4(),
            colorName: "#07689F",
            changeColor: false
        },
        {
            id: uuidv4(),
            colorName: "#FFC905",
            changeColor: false
        }
    ],

    resume: false,
    template: true,
    wizardSteps: [
        {active: false, title: 'Templates'},
        {active: false, title: 'Personal information'},
        {active: false, title: 'Address'},
        {active: false, title: 'About yourself and skills'},
        {active: false, title: 'Educations'},
        {active: false, title: 'Experience'},
        {active: false, title: 'Contacts'},
        {active: false, title: 'Hobbies'}
    ],
    wizardCurrentIdx: 0,
};

const reducers = {
    [RESUME_COLOR](state, {data}) {
        return {
            ...state,
            resumeColor: data,
        }
    },

    [RESUME_COLOR_BOX](state, {data}) {
        return {
            ...state,
            resumeColorBox: data,
        }
    },

    [RESUME_NUMBER](state, {data}) {
        return {
            ...state,
            resumeNumbers: data,
        }
    },

    [ADD_SIZE_CIRCLE](state) {
        return {
            ...state,
            size: !state.size
        }
    },
    [HOME_CIRCLE_VISIBLE](state, {size}) {
        return {
            ...state,
            scrollDown: size,
        }
    },
    [DISPLAY_NONE_CIRCLE](state) {
        return {
            ...state,
            displayNone: !state.displayNone
        }
    },
    [SHOW_RESUME](state) {
        return {
            ...state,
            resume: !state.resume
        }
    },
    [SHOW_TEMPLATE](state) {
        return {
            ...state,
            template: !state.template
        }
    },

    [SIGNED_BACK_WIZARD_STEP](state) {
        const {wizardCurrentIdx, wizardSteps} = state
        const _activeStep = wizardSteps.filter(step => step.active);
        if (_activeStep.length <= 1) {
            return {
                ...state
            }
        }
        const _newArray = [...wizardSteps];
        _newArray[wizardCurrentIdx - 1].active = false

        return {
            ...state,
            wizardSteps: [..._newArray],
            wizardCurrentIdx: wizardCurrentIdx - 1
        }
    },

    [SIGNED_NEXT_WIZARD_STEP](state) {
        const {wizardCurrentIdx, wizardSteps} = state;
        if (wizardCurrentIdx > wizardSteps.length - 1) {
            return {
                ...state
            }
        }

        const _newArray = [...wizardSteps]
        _newArray[wizardCurrentIdx].active = true

        return {
            ...state,
            wizardSteps: [..._newArray],
            wizardCurrentIdx: wizardCurrentIdx + 1
        }
    },
}

export default createReducer(defaultState, reducers)
