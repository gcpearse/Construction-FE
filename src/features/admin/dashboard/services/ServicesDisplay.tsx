import { Link } from "react-router-dom"
import { useGetServicesQuery } from "../../../api/apiSlice"


const ServicesDisplay: React.FC = () => {


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
    <div className="dash-comp-content">
      <p>There are currently {services.length} services listed.</p>
    </div>
  )


  return (
    <div
      className="dash-comp-wrapper"
      style={{
        gridColumn: 2
      }}>

      <h3>Services Overview</h3>

      {content}

      <Link to="/admin/services">
        <button className="dashboard-btn">
          Manage services
        </button>
      </Link>

    </div>
  )
}


export default ServicesDisplay
