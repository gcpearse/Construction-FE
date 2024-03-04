import { useNavigate } from "react-router-dom"
import { Job, Service } from "../../models"
import { formatHeader, formatJobsData } from "../../utils/formattingUtils"
import { checkJobs } from "../../utils/logicalUtils"


type Props = {
  service: Service
  jobs: Job[]
}


const JobsBoardServiceCard: React.FC<Props> = ({ service, jobs }) => {


  const navigate = useNavigate()


  return (
    <div className="service-wrapper">

      <div className="service-wrapper-top">

        <img src={service.image} alt={`An image representing ${service.name}.`} />

        <h3>{formatHeader(service.name)}</h3>

        <p>There {formatJobsData(service.count)} in the <span>{formatHeader(service.name)}</span> service category.</p>

      </div>

      <button
        className="dashboard-btn jobs-board-btn"
        onClick={() => navigate(`/admin/jobs/${service.name}`)}>
        {checkJobs(jobs, service) ? "Manage jobs" : "Add a job"}
      </button>

    </div>
  )
}


export default JobsBoardServiceCard
