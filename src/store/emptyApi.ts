
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://teaching-perfect-antelope.ngrok-free.app/api/v1/bns', headers: {
    'content-type': 'application/json',
    'ngrok-skip-browser-warning': 'true'
  }}),
  tagTypes: ["Order"],
  endpoints: () => ({}),
})