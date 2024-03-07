import { Link, useParams } from "react-router-dom"
import { useGetJobByIdQuery } from "../api/apiSlice"
import DashNavBtn from "../../common/DashNavBtn"
import { formatHeader, lengthenDate } from "../../utils/formattingUtils"
import { FaTrashAlt } from "react-icons/fa"
import { useAppDispatch } from "../../app/hooks"
import { openJobDeleter } from "./jobsSlice"
import JobDeleter from "./JobDeleter"


const SingleJob: React.FC = () => {


  const dispatch = useAppDispatch()

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
    <div className="single-job-container">

      <article className="single-job-wrapper">

        <div className="single-job-top">
          <h3>{formatHeader(job.job_Type)}</h3>
          <span>ID #{job.job_Id}</span>
        </div>

        <div className="single-job-content">

          <h4>{job.title}</h4>

          <h5>{job.tagline}</h5>

          <div>
            <h6>Date posted:</h6>
            <p>{lengthenDate(job.date)}</p>
          </div>

          <div>
            <h6>Client:</h6>
            <p>{job.client}</p>
          </div>

          <div>
            <h6>Location:</h6>
            <p>{job.location}</p>
          </div>

          <div>
            <h6>Description:</h6>
            <p>{job.description}</p>
          </div>

          <div className="single-job-btns-wrapper">

            <button
              className="blue-btn rectangular-btn">
              Update
            </button>

            <button
              className="yellow-btn icon-btn"
              onClick={() => {
                dispatch(openJobDeleter())
              }}>
              <FaTrashAlt className="btn-icon" />
            </button>

          </div>

        </div>

      </article>

      <JobDeleter job={job} />

    </div>
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
