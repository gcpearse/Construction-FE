import { Link, useNavigate } from "react-router-dom"
import DashNavBtn from "../../common/DashNavBtn"
import { Job } from "../../models"
import { formatHeader } from "../../utils/formattingUtils"
import { useGetJobsQuery } from "../api/apiSlice"
import AddJobBtn from "./AddJobBtn"
import JobAdder from "./JobAdder"
import { checkJobsByParams } from "../../utils/logicalUtils"
import { useAppDispatch } from "../../app/hooks"
import { openJobAdder } from "./jobsSlice"


type Props = {
  service: string | undefined
}


const Jobs: React.FC<Props> = ({ service }) => {


  const dispatch = useAppDispatch()

  const navigate = useNavigate()

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

  if (isSuccess) {
    if (checkJobsByParams(jobs, service)) {
      content = (
        <ul>
          {jobs.filter((job: Job) => {
            return job.job_Type === service
          }).map((job) => {
            return (
              <li
                key={job.job_Id}
                style={{
                  margin: "2em",
                  border: "2px solid black",
                  padding: "1em"
                }}>
                <p>Id: {job.job_Id}</p>
                <p>Title: {job.title}</p>
                <p>Tagline: {job.tagline}</p>
                <p>Description: {job.description}</p>
                <p>Service: {job.job_Type}</p>
                <p>Date: {job.date}</p>
                <p>Client: {job.client}</p>
                <p>Location: {job.location}</p>
              </li>
            )
          })}
        </ul>
      )
    } else {
      content = (
        <div className="floating-btns-wrapper">
          <button
            className="yellow-btn floating-btn"
            onClick={() => {
              dispatch(openJobAdder())
            }}>
            Create New Job
          </button>
          <button
            className="blue-btn floating-btn"
            onClick={() => {
              navigate("/admin/jobs")
            }}>
            Return to Jobs Board
          </button>
        </div>
      )
    }
  }


  return (
    <div className="page-wrapper">

      <div className="page-top">

        <h2>
          <Link to="/admin/jobs">
            Jobs
          </Link> / {service ? formatHeader(service) : "Error"}
        </h2>

        <div className="page-top-btns">
          <AddJobBtn />
          <DashNavBtn />
        </div>

      </div>

      <JobAdder />

      {content}

    </div>
  )
}


export default Jobs
