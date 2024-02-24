import { Job, Service } from "../models"

export const formatJobsData = (jobs: Job[], service: Service): string => {
  const res = jobs?.filter((job) => {
    return job.job_Type === service.name
  }).length
  if (res === 0) return "no jobs"
  if (res === 1) return "1 job"
  return `${res} jobs`
}
