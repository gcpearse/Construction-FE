import { job } from "../../models"
import { useGetJobsQuery } from "../api/apiSlice"
import Job from "./job"

const Jobs: React.FC = () => {

  const {
    data: jobs,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetJobsQuery()

  if (isLoading) return <p>Loading content...</p>
  if (isError) {
    console.log(error)
    return <p>Oops! Something went wrong...</p>
  }
  if (isSuccess) return (
    <ul>
      {jobs?.map((job: job) => {
        return (
          <li key={job.job_Id}><Job job={job} /></li>
        )
      })}
    </ul>
  )
}

export default Jobs
