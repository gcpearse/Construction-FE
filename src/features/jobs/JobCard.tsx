import { FaMapMarkerAlt, FaUser } from "react-icons/fa"
import { Job } from "../../models"
import { formatHeader, lengthenDate } from "../../utils/formattingUtils"
import { useNavigate } from "react-router-dom"


type Props = {
  job: Job
}


const JobCard: React.FC<Props> = ({ job }) => {


  const navigate = useNavigate()


  return (
    <div className="job-card-wrapper">

      <div>

        <div className="job-card-top">
          <h3>{formatHeader(job.title)}</h3>
          <span>ID #{job.job_Id}</span>
        </div>

        <div className="job-card-content">

          <p>Posted on {lengthenDate(job.date)}</p>

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

      <button
        className="dashboard-btn"
        onClick={() => navigate(`/admin/jobs/${job.job_Type}/${job.job_Id}`)}>
        View job
      </button>

    </div>
  )
}


export default JobCard
