import { createSelector } from "reselect";
import { RootState } from "../../store";


export const selectIsAuth = createSelector(
    [
        (state: RootState) => state.credentialReducer.token
    ],
    (token) => token != null
);

export const selectLoginStatus = createSelector(
    [
        (state: RootState) => state.credentialReducer.loginStatus
    ],
    (loginStatus) => loginStatus
)

export const selectRegisterStatus = createSelector(
    [(state: RootState) => state.credentialReducer.registerStatus],
    (status) => status
)