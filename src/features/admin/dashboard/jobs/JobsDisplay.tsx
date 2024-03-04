import { Link } from "react-router-dom"
import { useGetJobsQuery } from "../../../api/apiSlice"

const JobsDisplay: React.FC = () => {

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
    <div className="dash-comp-content">
      <p>There are currently <b>{jobs.length}</b> jobs listed across all service categories.</p>
    </div>
  )

  return (
    <div
      className="dash-comp-wrapper"
      style={{
        gridColumn: 2
      }}>

      <h3>Jobs Overview</h3>

      {content}

      <Link to="/admin/jobs">
        <button className="dashboard-btn">
          Manage jobs
        </button>
      </Link>

    </div>
  )
}

export default JobsDisplay
