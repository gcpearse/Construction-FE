import { useGetBusinessInfoQuery, useGetServicesQuery } from "../features/api/apiSlice"
import PublicService from "../features/services/services-public/PublicService"
import { Service } from "../models"


const ServicesPagePublic: React.FC = () => {


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
    <ul>

      {[...services].sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      }).map((service: Service) => {
        return (
          <li
            key={service.name}
            className={services.indexOf(service) % 2 ? (
              "public-service-wrapper left-card"
            ) : (
              "public-service-wrapper right-card"
            )}>
            <PublicService service={service} />
          </li>
        )
      })}

      <div className="public-service-final-el">
        <span>{businessInfo?.name}</span>
      </div>

    </ul>
  )


  return (
    <section className="service-page-public-wrapper">

      <h2>Our Services</h2>

      {content}

    </section>
  )
}


export default ServicesPagePublic
