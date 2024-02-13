import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { job, service, businessInfo } from "../../models"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://4.234.160.181:8080/construction/api"
  }),
  endpoints: builder => ({
    getJobs: builder.query<job[], void>({
      query: () => "/jobs"
    }),
    getServices: builder.query<service[], void>({
      query: () => "/services"
    }),
    getBusinessInfo: builder.query<businessInfo, void>({
      query: () => "/info"
    })
  })
})

export const {
  useGetJobsQuery,
  useGetServicesQuery,
  useGetBusinessInfoQuery
} = apiSlice
