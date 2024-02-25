import { Link } from "react-router-dom"
import { useGetServicesQuery } from "../api/apiSlice"
import { Service } from "../../models"
import SingleService from "./SingleService"
import ServiceUpdater from "./ServiceUpdater"

const ServicesBoard: React.FC = () => {

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
      {services.map((service: Service) => {
        return (
          <li
            key={service.name}
            className="services-board-el">
            <SingleService service={service} />
            <ServiceUpdater service={service} />
          </li>
        )
      })}
    </ul>
  )

  return (
    <div className="page-wrapper">

      <div className="page-top">
        <h2>Services</h2>
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

export default ServicesBoard
