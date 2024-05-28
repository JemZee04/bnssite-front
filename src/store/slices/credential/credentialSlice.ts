import { createAction, createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from "../../../@types/requestStatus";
import { User } from "../../beekneesApi";
import { loginThunk, registrationThunk } from "./asyncThunks";

type CredentialState = {
    token: string | null,
    profile: User | null,
    loginStatus: RequestStatus,
    registerStatus: RequestStatus
}

const initialState: CredentialState = {
    token: null,
    profile: null,
    loginStatus: RequestStatus.NEVER,
    registerStatus: RequestStatus.NEVER
}

export const logout = createAction('logout');

const credentialSlice = createSlice({
    name: 'credentialSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginThunk.pending, state => {
            state.loginStatus = RequestStatus.LOADING;
        }),
            builder.addCase(loginThunk.fulfilled, (state, action) => {
                state.loginStatus = RequestStatus.SUCCESSFUL;
                state.token = action.payload.accessToken ?? '';
                state.profile = action.payload.userProfile;
            }),
            builder.addCase(registrationThunk.pending, state => {
                state.registerStatus = RequestStatus.LOADING;
            }),
            builder.addCase(registrationThunk.fulfilled, (state, action) => {
                console.log(action.payload);
                
                state.registerStatus = RequestStatus.SUCCESSFUL;
                state.token = action.payload.accessToken ?? null;
            }),
            builder.addCase(logout, (state) => {
                state.token = null;
            })
    }
})

export const credentialReducer = credentialSlice.reducer;