import { Link } from "react-router-dom"
import { useGetJobsQuery, useGetServicesQuery } from "../api/apiSlice"
import { Service } from "../../models"
import { formatJobsData } from "../../utils/formattingUtils"

const JobsBoard: React.FC = () => {

  const {
    data: services,
    isLoading: isServicesLoading,
    isSuccess: isServicesSuccess,
    isError: isServicesError,
    error: servicesError
  } = useGetServicesQuery()

  const {
    data: jobs,
    isLoading: isJobsLoading,
    isSuccess: isJobsSuccess,
    isError: isJobsError,
    error: jobsError
  } = useGetJobsQuery()

  let content

  if (isServicesLoading || isJobsLoading) content = <p className="rtk-query-msg">Loading content...</p>

  if (isServicesError || isJobsError) {
    if (isServicesError) console.log(servicesError)
    if (isJobsError) console.log(jobsError)
    content = <p className="rtk-query-msg">Oops! Something went wrong...</p>
  }

  if (isServicesSuccess && isJobsSuccess) content = (
    <ul>
      {services.map((service: Service) => {
        return (
          <li
            key={service.name}
            className="jobs-board-el">
            <img src={service.image} alt={`Image for ${service.name}`} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>There are currently {formatJobsData(jobs, service)} listed under {service.name}.</p>
            <button>View jobs</button>
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
