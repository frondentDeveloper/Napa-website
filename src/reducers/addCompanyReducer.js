import createReducer from "../helpers/createReducer";

import {
    ADD_INITIAL_VALUE_COMPANY,
    EDIT_PASSWORD_COMPANY
} from "../actionTypes/addCompanyActionTypes";


const defaultState = {
    initialValue: {
        personAvatarInitialValue: "",
        firstNameInitialValue: "",
        lastNameInitialValue: "",
        phoneNumberInitialValue: "",
        avatarInitialValue: "",
        companyNameInitialValue: "",
        companyLocationInitialValue: "",
        companyLinkInitialValue: "",
        companyNumberInitialValue: "",
        companyAboutInitialValue: "",

        emailInitialValue: "",
        passwordInitialValue:"",
        enterCodeInitialValue:"",
        newPasswordInitialValue:"",
        testNewPasswordInitialValue:"",
        id: "",
        isWritten: false
    },
};

const reducers = {

    [ADD_INITIAL_VALUE_COMPANY](state, {data}) {
        const {initialValue} = state;
        return {
            ...state,
            initialValue: {
                personAvatarInitialValue: data.personAvatar,
                firstNameInitialValue: data.firstName,
                lastNameInitialValue: data.lastName,
                phoneNumberInitialValue: data.phoneNumber,
                avatarInitialValue: data.avatar,
                companyNameInitialValue: data.companyName,
                companyLocationInitialValue: data.companyLocation,
                companyLinkInitialValue: data.companyLink,
                companyNumberInitialValue: data.companyNumber,
                companyAboutInitialValue: data.companyAbout,

                emailInitialValue: data.email,
                passwordInitialValue: data.password,
                enterCodeInitialValue: data.enterCode,
                newPasswordInitialValue: data.newPassword,
                testNewPasswordInitialValue: data.testNewPassword,
                id: data.id,
                isWritten: true
            }
        }
    },

};

export default createReducer(defaultState, reducers);

