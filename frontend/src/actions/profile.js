import { PROFILE_SELECTED, PROFILES_RETRIEVE_SUCCESS, PROFILES_RETRIEVE_FAILURE } from "../types";

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

// TODO: pass in email & password and fetch result(boolean) from database
// export const getProfiles = () => {}
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