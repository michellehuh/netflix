import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../types";

export const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user
});

export const userLoginFailure = error => ({
    type: USER_LOGIN_FAILURE,
    error
  });

// TODO: pass in email & password and fetch result(boolean) from database
export const login = credentials => dispatch =>
  fetch("http://localhost:8080/admin/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(resObj => {
      if (resObj.data !== null) {
        dispatch(userLoginSuccess(resObj.data));
      } else {
        dispatch(userLoginFailure({ message: "User Does Not Exist!" }));
      }
    })
    .catch(res => dispatch(userLoginFailure(res.error)));

// export const login = credentials => dispatch =>
//   api.user
//     .login(credentials)
//     .then(res => {
//       if (res.exists) {
//         dispatch(userLoginSuccess(res.user));
//       }
//     })
//     .catch(res => {
//       if (!res.exists) {
//         dispatch(userLoginFailure(res.error));
//       }
//     });
