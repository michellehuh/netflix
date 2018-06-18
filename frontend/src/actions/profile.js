import { PROFILE_SELECTED,
    PROFILES_RETRIEVE_SUCCESS,
    PROFILES_RETRIEVE_FAILURE,
    PROFILE_CREATE_FAILURE,
    PROFILE_CREATE_SUCCESS,
    PROFILE_UPDATE_FAILURE,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_DELETE_FAILURE,
    PROFILE_DELETE_SUCCESS

} from "../types";

export const profileSelected = profile => ({
    type: PROFILE_SELECTED,
    profile
});


export const profilesRetrieveSucess = profiles => ({
    type: PROFILES_RETRIEVE_SUCCESS,
    profiles
});

export const profilesRetrieveFailure = error => ({
    type: PROFILES_RETRIEVE_FAILURE,
    error
});


export const profileCreateFailure = error => ({
    type: PROFILE_CREATE_FAILURE,
    error
});

export const profileCreateSuccess = profile => ({
    type: PROFILE_CREATE_SUCCESS,
    profile
});


export const profileUpdateFailure = error => ({
    type: PROFILE_UPDATE_FAILURE,
    error
});


export const profileUpdateSuccess = profile => ({
    type: PROFILE_UPDATE_SUCCESS,
    profile
});

export const profileDeleteFailure = error => ({
    type: PROFILE_DELETE_FAILURE,
    error
});

export const profileDeleteSuccess = bool => ({
    type: PROFILE_DELETE_SUCCESS,
    bool
});

export const getProfiles = credentials => dispatch =>
    fetch("http://localhost:8080/admin/profiles", {
        method: "POST",
        body: JSON.stringify({id: credentials}),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(resObj => dispatch(profilesRetrieveSucess(resObj.data)))
        .catch(res => dispatch(profilesRetrieveFailure(res.error)));


export const updateProfile = profile => dispatch =>
    fetch("http://localhost:8080/admin/profile/update", {
        method: "POST",
        body: JSON.stringify(profile),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(resObj => dispatch(profileUpdateSuccess(resObj.data)))
        .catch(res => dispatch(profileUpdateFailure(res.error)));

export const createProfile = profile => dispatch =>
    fetch("http://localhost:8080/admin/profile/create", {
        method: "POST",
        body: JSON.stringify({id: profile}),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(resObj => dispatch(profileCreateSuccess(resObj.data)))
        .catch(res => dispatch(profileCreateFailure(res.error)));

export const deleteProfile = profile => dispatch =>
    fetch("http://localhost:8080/admin/profile/create", {
        method: "DELETE",
        body: JSON.stringify({id: profile}),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(resObj => dispatch(profileDeleteSuccess(resObj.data)))
        .catch(res => dispatch(profileDeleteFailure(res.error)));