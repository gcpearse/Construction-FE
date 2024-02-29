import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { closeJobAdder } from "./jobsSlice"
import { useForm } from "react-hook-form"
import { useState } from "react"


const JobAdder: React.FC = () => {


  const dispatch = useAppDispatch()

  const { isJobAdderToggled } = useAppSelector(state => state.jobs)

  const [charLimit, setCharLimit] = useState<number>(0)

  const {
    register
  } = useForm()

  return (
    <div className={isJobAdderToggled ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">

          <h3>Create Job</h3>

          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeJobAdder())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>

        </div>

        <form>

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

          <label htmlFor="service-description-input">
            Description of job: <span>*</span>
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

          <button
            type="submit"
            className="modal-btn">
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}


export default JobAdder
