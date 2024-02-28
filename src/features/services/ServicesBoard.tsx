import { useGetBusinessInfoQuery, useGetServicesQuery } from "../api/apiSlice"
import { Service } from "../../models"
import SingleService from "./SingleService"
import ServiceUpdater from "./ServiceUpdater"
import ServiceDeleter from "./ServiceDeleter"
import ServiceImageUpdater from "./ServiceImageUpdater"
import DashNavBtn from "../../common/DashNavBtn"
import AddServiceBtn from "./AddServiceBtn"
import ServiceAdder from "./ServiceAdder"


const ServicesBoard: React.FC = () => {


  const {
    data: businessInfo
  } = useGetBusinessInfoQuery()

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
    <ul className="page-els-wrapper services-board-wrapper">

      {[...services].sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      }).map((service: Service) => {
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

      <div className="services-board-final-el">
        <span>{businessInfo?.name}</span>
      </div>

    </ul>
  )


  return (
    <div className="page-wrapper">

      <div className="page-top">

        <h2>Services</h2>

        <div style={{ display: "flex" }}>
          <AddServiceBtn />
          <DashNavBtn />
        </div>

      </div>

      <ServiceAdder />

      {content}

    </div>
  )
}


export default ServicesBoard
