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
    <div className="dash-comp-content jobs-display-content">
      <p>There are currently {jobs.length} jobs listed.</p>
    </div>
  )

  return (
    <div className="dash-comp-wrapper">
      <h3>Jobs Overview</h3>
      {content}
      <button className="dashboard-btn">Manage jobs</button>
    </div>
  )
}

export default JobsDisplay
