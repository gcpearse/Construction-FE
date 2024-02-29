import DashNavBtn from "../../common/DashNavBtn"
import { Job } from "../../models"
import { formatHeader } from "../../utils/formattingUtils"
import { useGetJobsQuery } from "../api/apiSlice"


type Props = {
  service: string | undefined
}


const Jobs: React.FC<Props> = ({ service }) => {


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


  return (
    <div className="page-wrapper">

      <div className="page-top">

        <h2>Jobs / {service ? formatHeader(service) : "Error"}</h2>

        <div>
          <DashNavBtn />
        </div>

      </div>

      {content}

    </div>
  )
}


export default Jobs
