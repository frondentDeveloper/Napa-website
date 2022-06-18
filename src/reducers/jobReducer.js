import createReducer from "../helpers/createReducer";
import {INITIAL_DESCRIPTION, INITIAL_SKILLS, INITIAL_VALUE} from "../actionTypes/jopActionTypes";

const initialState = {
    search: "",
    location: "",
    price: "",
    description: "",
    skill: []
};


const jobReducer =  {

    [INITIAL_VALUE](state, {data}) {
        console.log(state);
        console.log(data);
        return {
            ...state,
            search: data.search,
            location: data.location
        }
    },

    [INITIAL_DESCRIPTION](state, {data}) {
        return {
            ...state,
            price: data.price,
            description: data.description
        }
    },

    [INITIAL_SKILLS](state, {data}) {
        return {
            ...state,
            skill: data.skill
        }
    }

};

export default createReducer(initialState, jobReducer)