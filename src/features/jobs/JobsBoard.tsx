import { Link } from "react-router-dom"
import { useGetServicesQuery } from "../api/apiSlice"
import { Service } from "../../models"

const JobsBoard: React.FC = () => {

  const {
    data: services,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetServicesQuery()

  let content

  if (isLoading) content = <p className="rtk-query-msg">Loading content...</p>

  if (isError) {
    console.log(error)
    content = <p className="rtk-query-msg">Oops! Something went wrong...</p>
  }

  if (isSuccess) content = (
    <ul>
      {services?.map((service: Service) => {
        return (
          <li key={service.name}>
            <p>{service.description}</p>
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
