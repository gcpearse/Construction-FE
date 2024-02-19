import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Job, Service, BusinessInfo, LoginResponse, LoginRequest } from "../../models"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://4.234.160.181:8080/construction/api"
  }),
  tagTypes: ["businessInfo"],
  endpoints: builder => ({
    getJobs: builder.query<Job[], void>({
      query: () => "/jobs"
    }),
    getServices: builder.query<Service[], void>({
      query: () => "/jobtypes"
    }),
    getBusinessInfo: builder.query<BusinessInfo, void>({
      query: () => "/info",
      providesTags: ["businessInfo"]
    }),
    updateBusinessInfo: builder.mutation<BusinessInfo, { businessInfo: BusinessInfo, token: string }>({
      query: ({ businessInfo, token }) => ({
        url: "/info",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: businessInfo
      }),
      invalidatesTags: ["businessInfo"]
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (loginDetails) => ({
        url: "/login-admin",
        method: "POST",
        body: loginDetails
      })
    })
  })
})

export const {
  useGetJobsQuery,
  useGetServicesQuery,
  useGetBusinessInfoQuery,
  useUpdateBusinessInfoMutation,
  useLoginMutation
} = apiSlice
