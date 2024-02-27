import { Link } from "react-router-dom"
import { useGetServicesQuery } from "../api/apiSlice"
import { Service } from "../../models"
import SingleService from "./SingleService"
import ServiceUpdater from "./ServiceUpdater"
import ServiceDeleter from "./ServiceDeleter"
import ServiceImageUpdater from "./ServiceImageUpdater"
import { FaPlus } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"

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
    <ul className="page-els-wrapper">
      {services.map((service: Service) => {
        return (
          <li
            key={service.name}
            className="services-board-el">
            <SingleService service={service} />
            <ServiceImageUpdater service={service} />
            <ServiceUpdater service={service} />
            <ServiceDeleter service={service} />
          </li>
        )
      })}
    </ul>
  )

  return (
    <div className="page-wrapper">

      <div className="page-top">

        <h2>Services</h2>

        <div style={{ display: "flex" }}>

          <button
            className="yellow-btn large-display-el"
            style={{ marginRight: "1em" }}>
            Add Service
          </button>
          <button
            className="yellow-icon-btn icon-btn small-display-el"
            style={{ marginRight: "1em" }}>
            <FaPlus className="btn-icon" />
          </button>

          <Link to="/admin">
            <button className="blue-btn large-display-el">
              <p>Dashboard</p>
            </button>
          </Link>
          <Link to="/admin">
            <button className="blue-icon-btn icon-btn small-display-el">
              <MdDashboard className="btn-icon" />
            </button>
          </Link>

        </div>

      </div>

      {content}

    </div>
  )
}

export default ServicesBoard
