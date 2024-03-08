import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { closeJobUpdater } from "./jobsSlice"
import { Job } from "../../models"
import { formatHeader } from "../../utils/formattingUtils"


type Props = {
  job: Job
}


const JobUpdater: React.FC<Props> = ({ job }) => {


  const dispatch = useAppDispatch()

  const { isJobUpdaterToggled } = useAppSelector(state => state.jobs)


  return (
    <div className={isJobUpdaterToggled ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">

          <h3>Edit {formatHeader(job.job_Type)} ID #{job.job_Id}</h3>

          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeJobUpdater())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>

        </div>

        <form>
        </form>
      </div>
    </div>
  )
}


export default JobUpdater
