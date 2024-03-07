import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Job } from "../../models"
import { closeJobDeleter } from "./jobsSlice"
import { formatHeader } from "../../utils/formattingUtils"


type Props = {
  job: Job
}


const JobDeleter: React.FC<Props> = ({ job }) => {


  const dispatch = useAppDispatch()

  const { isJobDeleterToggled } = useAppSelector(state => state.jobs)


  return (
    <div className={isJobDeleterToggled ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">

          <h3>{formatHeader(job.job_Type)} ID #{job.job_Id}</h3>

          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeJobDeleter())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>

        </div>

        <div className="modal-form-text-wrapper">

          <h4>Delete this job?</h4>

          <p>This process is irreversible. If you are sure you wish to proceed, please enter your admin name and click delete.</p>

        </div>

        <form>
        </form>
      </div>
    </div>
  )
}


export default JobDeleter
