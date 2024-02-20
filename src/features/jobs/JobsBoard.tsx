import { Link } from "react-router-dom"
import { useGetJobsQuery } from "../api/apiSlice"
import { Job } from "../../models"
import SingleJob from "./SingleJob"

const JobsBoard: React.FC = () => {

  const {
    data: jobs,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetJobsQuery()

  let content

  if (isLoading) content = <p className="rtk-query-msg">Loading content...</p>

  if (isError) {
    console.log(error)
    content = <p className="rtk-query-msg">Oops! Something went wrong...</p>
  }

  if (isSuccess) content = (
    <ul>
      {jobs?.map((job: Job) => {
        return (
          <li key={job.job_Id}>
            <SingleJob job={job} />
          </li>
        )
      })}
    </ul>
  )

  return (
    <div className="page-wrapper">

      <div className="page-top">
        <h2>Jobs</h2>
        <Link to="/admin">
          <button className="dash-nav-btn">
            Dashboard
          </button>
        </Link>
      </div>

      {content}

    </div>
  )
}

export default JobsBoard
