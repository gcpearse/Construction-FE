import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { closeJobUpdater } from "../jobsSlice"
import { Job, JobUpdate } from "../../../models"
import { formatHeader } from "../../../utils/formattingUtils"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import { useUpdateJobMutation } from "../../api/apiSlice"
import { useCookies } from "react-cookie"


type Props = {
  job: Job
}


const JobUpdater: React.FC<Props> = ({ job }) => {


  const currentData = {
    title: job.title,
    tagline: job.tagline,
    description: job.description,
    client: job.client,
    location: job.location
  }


  const dispatch = useAppDispatch()

  const { isJobUpdaterToggled } = useAppSelector(state => state.jobs)

  const [{ token }] = useCookies(["token"])

  const [errorMsg, setErrorMsg] = useState<string>("")
  const [charLimit, setCharLimit] = useState<number>(job.description.length)

  const [updateJob] = useUpdateJobMutation()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<JobUpdate>({
    defaultValues: currentData,
    values: currentData
  })


  const submitForm: SubmitHandler<JobUpdate> = async (data) => {

    try {
      await updateJob({
        job: data,
        id: job.job_Id,
        token: token
      }).unwrap()

      dispatch(closeJobUpdater())

      document.body.style.overflow = "auto"

      setErrorMsg("")

    } catch (error: any) {

      console.log(error)

      if (error.status === 401) {
        setErrorMsg("Authentication error. Please refresh the page.")
      } else {
        setErrorMsg("Oops! Something went wrong...")
      }

    }
  }


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
              reset(currentData)
              dispatch(closeJobUpdater())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>

        </div>

        <form onSubmit={handleSubmit(submitForm)}>

          <label htmlFor="job-title-input">
            Job title: <span>*</span>
          </label>

          <input
            type="text"
            id="job-title-input"
            autoComplete="true"
            required
            {...register("title")} />

          <label htmlFor="job-tagline-input">
            Tagline: <span>*</span>
          </label>

          <input
            type="text"
            id="job-tagline-input"
            autoComplete="true"
            required
            {...register("tagline")} />

          <label htmlFor="job-client-input">
            Client: <span>*</span>
          </label>

          <input
            type="text"
            id="job-client-input"
            autoComplete="true"
            required
            {...register("client")} />

          <label htmlFor="job-location-input">
            Location: <span>*</span>
          </label>

          <input
            type="text"
            id="job-location-input"
            autoComplete="true"
            required
            {...register("location")} />

          <label htmlFor="job-description-input">
            Job description: <span>*</span>
          </label>

          <textarea
            rows={5}
            id="job-description-input"
            autoComplete="true"
            maxLength={200}
            required
            {...register("description", {
              onChange: (e) => {
                setCharLimit(e.target.value.length)
              }
            })} />

          <p>{200 - charLimit} characters remaining.</p>

          <p>* Indicates a required field.</p>

          <div className="modal-btn-wrapper">

            <button
              type="button"
              className="modal-btn-small yellow-btn"
              onClick={() => {
                reset(currentData)
                setCharLimit(job.description.length)
              }}>
              Reset
            </button>

            <button
              type="reset"
              className="modal-btn-small yellow-btn"
              onClick={() => setCharLimit(0)}>
              Clear
            </button>

          </div>

          <button
            type="submit"
            className="modal-btn blue-btn">
            Submit
          </button>

          {errorMsg ? <p className="rtk-query-form-msg">{errorMsg}</p> : null}

        </form>
      </div>
    </div>
  )
}


export default JobUpdater
