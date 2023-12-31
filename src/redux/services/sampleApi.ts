// https://api.slingacademy.com/v1/sample-data/photos/4

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Sample } from "../../types/api";

export const sampleApi = createApi({
  reducerPath: "sampleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_SERVER_API
  }),
  endpoints: builder => ({
    getSampleData: builder.query<Sample, void>({
      query: () => "/v1/sample-data/photos/4"
    })
  })
})

export const { useGetSampleDataQuery } = sampleApi
