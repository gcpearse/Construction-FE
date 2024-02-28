import { Job, Service } from "../../models"
import { formatHeader, formatJobsData } from "../../utils/formattingUtils"
import { checkJobs } from "../../utils/logicalUtils"


type Props = {
  service: Service
  jobs: Job[]
}


const JobsBoardService: React.FC<Props> = ({ service, jobs }) => {


  return (
    <div className="service-wrapper">

      <div className="service-wrapper-top">

        <img src={service.image} alt={`An image representing ${service.name}.`} />

        <h3>{formatHeader(service.name)}</h3>

        <p>There are currently {formatJobsData(jobs, service)} in the <span>{formatHeader(service.name)}</span> service category.</p>

      </div>

      {checkJobs(jobs, service) ? (
        <button className="dashboard-btn jobs-board-btn">
          Manage jobs
        </button>
      ) : (
        <button className="dashboard-btn jobs-board-btn">
          Add a job
        </button>
      )}

    </div>
  )
}


export default JobsBoardService
