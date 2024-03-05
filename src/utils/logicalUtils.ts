import { Job, Service } from "../models"


export const checkJobs = (jobs: Job[], service: Service): boolean => {

  return Boolean(jobs.filter((job) => {
    return job.job_Type === service.name
  }).length)
}


export const checkJobsByParams = (jobs: Job[], service: string | undefined): boolean => {

  return Boolean(jobs.filter((job) => {
    return job.job_Type === service
  }).length)
}
