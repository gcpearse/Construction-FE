import { FaMapMarkerAlt, FaUser } from "react-icons/fa"
import { Job } from "../../models"
import { formatHeader } from "../../utils/formattingUtils"


type Props = {
  job: Job
}


const JobCard: React.FC<Props> = ({ job }) => {


  return (
    <div className="job-card-wrapper">

      <div>

        <div className="job-card-top">
          <h3>{formatHeader(job.title)}</h3>
          <span>#{job.job_Id}</span>
        </div>

        <div className="job-card-content">

          <p>{job.date}</p>

          <h4>{job.tagline}</h4>

          <div className="job-card-info-row">
            <FaUser />
            <p>{job.client}</p>
          </div>

          <div className="job-card-info-row">
            <FaMapMarkerAlt />
            <p>{job.location}</p>
          </div>

        </div>

      </div>

      <button className="dashboard-btn">
        View job
      </button>

    </div>
  )
}


export default JobCard
