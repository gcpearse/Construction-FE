import { Link, useParams } from "react-router-dom"
import { useGetJobByIdQuery } from "../api/apiSlice"
import DashNavBtn from "../../common/DashNavBtn"
import { formatHeader } from "../../utils/formattingUtils"


const SingleJob: React.FC = () => {


  const { service, job_id } = useParams()

  const {
    data: job,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetJobByIdQuery({
    id: job_id
  })


  let content

  if (isLoading) content = <p className="rtk-query-msg">Loading content...</p>

  if (isError) {
    console.log(error)
    content = <p className="rtk-query-msg">Oops! Something went wrong...</p>
  }

  if (isSuccess) content = (
    <p>Details of job #{job.job_Id} will go here.</p>
  )


  return (
    <div className="page-wrapper">

      <div className="page-top">

        <h2>
          <Link to="/admin/jobs">
            Jobs
          </Link> / <Link to={`/admin/jobs/${job?.job_Type}`}>
            {service ? formatHeader(service) : "Error"}
          </Link> / ID #{job?.job_Id}
        </h2>

        <div className="page-top-btns">
          <DashNavBtn />
        </div>

      </div>

      {content}

    </div>
  )
}


export default SingleJob
