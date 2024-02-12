import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { job, jobType, personalInfo } from "../../models"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://4.234.160.181:8080/construction/api" }),
  endpoints: builder => ({
    getJobs: builder.query<job[], void>({
      query: () => "/jobs"
    }),
    getJobTypes: builder.query<jobType[], void>({
      query: () => "/jobtypes"
    }),
    getPersonalInfo: builder.query<personalInfo, void>({
      query: () => "/info"
    })
  })
})

export const {
  useGetJobsQuery,
  useGetJobTypesQuery,
  useGetPersonalInfoQuery
} = apiSlice
