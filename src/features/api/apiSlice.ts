import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Job, Service, BusinessInfo, LoginResponse, LoginRequest } from "../../models"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://4.234.160.181:8080/construction/api"
  }),
  endpoints: builder => ({
    getJobs: builder.query<Job[], void>({
      query: () => "/jobs"
    }),
    getServices: builder.query<Service[], void>({
      query: () => "/jobtypes"
    }),
    getBusinessInfo: builder.query<BusinessInfo, void>({
      query: () => "/info"
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ name, password }) => ({
        url: "/login-admin",
        method: "POST",
        body: { name, password }
      })
    })
  })
})

export const {
  useGetJobsQuery,
  useGetServicesQuery,
  useGetBusinessInfoQuery,
  useLoginMutation
} = apiSlice
