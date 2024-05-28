import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PostUserSignInApiArg, PostUserSignInApiResponse, PostUserSignUpApiArg, PostUserSignUpApiResponse } from "../../beekneesApi";

export const loginThunk = createAsyncThunk(
    'login',
    async (aa: PostUserSignInApiArg) => {
        const jsondata = await fetch('https://teaching-perfect-antelope.ngrok-free.app/api/v1/bns/user/sign-in', {
            method: 'POST',
            body: JSON.stringify({
                "phone": aa.body.phone,
                "password": aa.body.password
            })
        })        
        const res = (await jsondata.json());        
        return res;
        
        // return (await axios.post<PostUserSignInApiResponse>(
        //     'https://teaching-perfect-antelope.ngrok-free.app/api/v1/bns/user/sign-in',
        //     {
        //         "phone": aa.body.phone,
        //         "password": aa.body.password
        //     },{
        //         headers:{
        //             'Access-Control-Allow-Origin': '*',
        //             "Content-Type": "text/plain"
        //         },
        //         withCredentials: true
        //     }
        // )).data;
    }
);

export const registrationThunk = createAsyncThunk(
    'register',
    async (args: PostUserSignUpApiArg) => {
        // return (await axios.post<PostUserSignUpApiResponse>(
        //     'https://teaching-perfect-antelope.ngrok-free.app/api/v1/bns/user/sign-up',
        //     args.userSignIn,
        //     {
        //         headers: {
        //             Accept: '*'
        //         },
        //         withCredentials: true
        //     }
        // )).data
        const jsondata = await fetch('https://teaching-perfect-antelope.ngrok-free.app/api/v1/bns/user/sign-up', {
            method: 'POST',
            body: JSON.stringify(args.userSignIn)
        })        
        const res = (await jsondata.json());        
        return res;
    }
)