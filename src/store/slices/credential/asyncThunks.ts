import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { async } from "q";
import { PostUserSignInApiArg, PostUserSignInApiResponse, PostUserSignUpApiArg, PostUserSignUpApiResponse } from "../../beekneesApi";

export const loginThunk = createAsyncThunk(
    'login',
    async (aa: PostUserSignInApiArg) => {
        return (await axios.post<PostUserSignInApiResponse>(
            'http://localhost:7070/api/v1/bns/user/sign-in',
            {
                phone: aa.body.phone,
                password: aa.body.password
            }
        )).data;
    }
);

export const registrationThunk = createAsyncThunk(
    'register',
    async (args: PostUserSignUpApiArg) => {
        return (await axios.post<PostUserSignUpApiResponse>(
            'http://localhost:7070/api/v1/bns/user/sign-up',
            args.userSignIn,
        )).data
    }
)