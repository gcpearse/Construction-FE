import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Job, Service, BusinessInfo, LoginResponse, LoginRequest, JobRequest, ServiceRequest, JobUpdate, JobImage } from "../../models"


export const apiSlice = createApi({

  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://4.234.160.181:8080/construction/api"
  }),

  tagTypes: ["businessInfo", "jobs", "job", "services"],

  endpoints: builder => ({

    getJobs: builder.query<Job[], void>({
      query: () => "/jobs",
      providesTags: ["jobs"]
    }),

    getJobById: builder.query<Job, { id: string | undefined }>({
      query: ({ id }) => `/jobs/${id}`,
      providesTags: ["job"]
    }),

    addJob: builder.mutation<Job, { job: JobRequest, token: string }>({
      query: ({ job, token }) => ({
        url: "/jobs",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: job
      }),
      invalidatesTags: ["jobs", "services"]
    }),

    updateJob: builder.mutation<Job, { job: JobUpdate, id: number, token: string }>({
      query: ({ job, id, token }) => ({
        url: `/jobs/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: job
      }),
      invalidatesTags: ["jobs", "job", "services"]
    }),

    deleteJob: builder.mutation<void, { id: number, token: string }>({
      query: ({ id, token }) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: ["jobs", "services"]
    }),

    addJobImage: builder.mutation<JobImage, { image: FormData, id: number, token: string }>({
      query: ({ image, id, token }) => ({
        url: `/jobs/${id}/image`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: image
      }),
      invalidatesTags: ["job"]
    }),

    deleteJobImage: builder.mutation<void, { id: number, token: string }>({
      query: ({ id, token }) => ({
        url: `/jobs/image/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: ["job"]
    }),

    getServices: builder.query<Service[], void>({
      query: () => "/jobtypes",
      providesTags: ["services"]
    }),

    addService: builder.mutation<Service, { service: ServiceRequest, token: string }>({
      query: ({ service, token }) => ({
        url: "/jobtypes",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: service
      }),
      invalidatesTags: ["services"]
    }),

    updateServiceImage: builder.mutation<Service, { name: string, image: FormData, token: string }>({
      query: ({ name, image, token }) => ({
        url: `/jobtypes/${name}/image`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: image
      }),
      invalidatesTags: ["services"]
    }),

    updateServiceDescription: builder.mutation<Service, { service: ServiceRequest, token: string }>({
      query: ({ service, token }) => ({
        url: `/jobtypes/${service.name}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          description: service.description,
          icon: service.icon
        }
      }),
      invalidatesTags: ["services"]
    }),

    deleteService: builder.mutation<void, { name: string, token: string }>({
      query: ({ name, token }) => ({
        url: `/jobtypes/${name}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: ["services"]
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

    addImage: builder.mutation<{ imageLink: string }, { file: FormData, token: string }>({
      query: ({ file, token }) => ({
        url: "/image",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: file
      })
    }),

    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (loginDetails) => ({
        url: "/login-admin",
        method: "POST",
        body: loginDetails
      })
    }),

    testAuth: builder.query<{ message: string }, { token: string }>({
      query: (token) => ({
        url: "/test-auth",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })

  })
})


export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useAddJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
  useAddJobImageMutation,
  useDeleteJobImageMutation,
  useGetServicesQuery,
  useAddServiceMutation,
  useUpdateServiceImageMutation,
  useUpdateServiceDescriptionMutation,
  useDeleteServiceMutation,
  useGetBusinessInfoQuery,
  useUpdateBusinessInfoMutation,
  useAddImageMutation,
  useLoginMutation,
  useTestAuthQuery
} = apiSlice
