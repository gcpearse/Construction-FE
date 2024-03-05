import { Link } from "react-router-dom"
import DashNavBtn from "../../common/DashNavBtn"
import { Job } from "../../models"
import { formatHeader } from "../../utils/formattingUtils"
import { useGetBusinessInfoQuery, useGetJobsQuery } from "../api/apiSlice"
import AddJobBtn from "./AddJobBtn"
import JobAdder from "./JobAdder"
import { checkJobsByParams } from "../../utils/logicalUtils"
import FloatingJobBtns from "./FloatingJobBtns"
import JobCard from "./JobCard"


type Props = {
  service: string | undefined
}


const Jobs: React.FC<Props> = ({ service }) => {


  const {
    data: businessInfo
  } = useGetBusinessInfoQuery()

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
        <ul className="page-els-wrapper services-board-wrapper">

          {jobs.filter((job: Job) => {
            return job.job_Type === service
          }).map((job) => {
            return (
              <li
                key={job.job_Id}
                className="jobs-board-el">
                <JobCard job={job} />
              </li>
            )
          })}

          <div className="services-board-final-el">
            <span>{businessInfo?.name}</span>
          </div>

        </ul>
      )
    } else {
      content = (
        <FloatingJobBtns />
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
