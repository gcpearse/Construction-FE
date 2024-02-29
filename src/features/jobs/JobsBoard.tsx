import { useGetBusinessInfoQuery, useGetJobsQuery, useGetServicesQuery } from "../api/apiSlice"
import { Service } from "../../models"
import DashNavBtn from "../../common/DashNavBtn"
import JobsBoardServiceCard from "./JobsBoardServiceCard"


const JobsBoard: React.FC = () => {


  const {
    data: businessInfo
  } = useGetBusinessInfoQuery()

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
            <JobsBoardServiceCard service={service} jobs={jobs} />
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

        <h2>Jobs</h2>

        <div>
          <DashNavBtn />
        </div>

      </div>

      {content}

    </div>
  )
}


export default JobsBoard
