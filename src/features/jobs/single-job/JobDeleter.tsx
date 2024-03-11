import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { Job } from "../../../models"
import { closeJobDeleter } from "../jobsSlice"
import { formatHeader } from "../../../utils/formattingUtils"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useState } from "react"
import { useDeleteJobMutation } from "../../api/apiSlice"
import { useNavigate } from "react-router-dom"


type Props = {
  job: Job
}

type FormValues = {
  name: string
}


const JobDeleter: React.FC<Props> = ({ job }) => {


  const dispatch = useAppDispatch()

  const { isJobDeleterToggled } = useAppSelector(state => state.jobs)

  const navigate = useNavigate()

  const [{ token }] = useCookies(["token"])

  const [errorMsg, setErrorMsg] = useState<string>("")

  const [deleteJob] = useDeleteJobMutation()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<FormValues>()


  const submitForm: SubmitHandler<FormValues> = async ({ name }) => {

    const currentUser = localStorage.getItem("name")

    if (currentUser === name) {
      try {
        await deleteJob({
          id: job.job_Id,
          token: token
        }).unwrap()

        reset()

        dispatch(closeJobDeleter())

        document.body.style.overflow = "auto"

        setErrorMsg("")

        navigate(`/admin/jobs/${job.job_Type}`)

      } catch (error: any) {

        console.log(error)

        if (error.status === 401) {
          setErrorMsg("Authentication error. Please refresh the page.")
        } else {
          setErrorMsg("Oops! Something went wrong...")
        }

      }

    } else {
      setErrorMsg("Incorrect admin name.")
    }
  }


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

        <form
          onSubmit={handleSubmit(submitForm)}
          onChange={() => setErrorMsg("")}>

          <label htmlFor={`delete-job-name-input`}>
            Admin name:
          </label>

          <input
            type="text"
            id={`delete-job-name-input`}
            autoComplete="true"
            required
            {...register("name")} />

          <button
            type="submit"
            className="modal-btn blue-btn">
            DELETE
          </button>

          {errorMsg ? <p className="rtk-query-form-msg">{errorMsg}</p> : null}

        </form>
      </div>
    </div>
  )
}


export default JobDeleter
