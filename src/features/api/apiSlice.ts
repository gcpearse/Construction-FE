import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Job, Service, BusinessInfo, LoginResponse, LoginRequest } from "../../models"

export const apiSlice = createApi({

  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://4.234.160.181:8080/construction/api"
  }),

  tagTypes: ["businessInfo", "services"],

  endpoints: builder => ({

    getJobs: builder.query<Job[], void>({
      query: () => "/jobs"
    }),

    getServices: builder.query<Service[], void>({
      query: () => "/jobtypes",
      providesTags: ["services"]
    }),

    // May need to change once image file can be uploaded
    addService: builder.mutation<Service, { service: Service, token: string }>({
      query: ({ service, token }) => ({
        url: "/jobtypes",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          name: service.name,
          description: service.description,
          image: service.image,
          icon: service.icon
        }
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

    updateServiceDescription: builder.mutation<Service, { service: Service, token: string }>({
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
  useGetServicesQuery,
  useAddServiceMutation,
  useUpdateServiceImageMutation,
  useUpdateServiceDescriptionMutation,
  useDeleteServiceMutation,
  useGetBusinessInfoQuery,
  useUpdateBusinessInfoMutation,
  useLoginMutation,
  useTestAuthQuery
} = apiSlice
