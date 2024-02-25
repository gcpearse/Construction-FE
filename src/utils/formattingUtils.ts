import { Job, Service } from "../models"

export const formatJobsData = (jobs: Job[], service: Service): string => {
  const res = jobs.filter((job) => {
    return job.job_Type === service.name
  }).length
  if (res === 0) return "no jobs"
  if (res === 1) return "1 job"
  return `${res} jobs`
}

export const formatHeader = (header: string): string => {
  const words = header.split(" ")
  const formattedWords: string[] = []
  for (const word of words) {
    formattedWords.push(`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
  }
  return formattedWords.join(" ")
}
