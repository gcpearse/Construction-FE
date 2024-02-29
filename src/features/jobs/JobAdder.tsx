import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { closeJobAdder } from "./jobsSlice"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useGetServicesQuery } from "../api/apiSlice"


const JobAdder: React.FC = () => {


  const dispatch = useAppDispatch()

  const { isJobAdderToggled, selectedService } = useAppSelector(state => state.jobs)

  const [charLimit, setCharLimit] = useState<number>(0)


  const {
    data: services,
    isSuccess
  } = useGetServicesQuery()

  const {
    register
  } = useForm()


  let content

  if (isSuccess) content = (
    [...services].sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    }).map((service) => {
      return (
        <option
          key={service.name}
          value={service.name} >
          {service.name}
        </option>
      )
    })
  )


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

          {selectedService ? (
            <>
              <label htmlFor="job-type-input">
                Service:
              </label>

              <input
                type="text"
                id="job-type-input"
                autoComplete="true"
                value={selectedService}
                readOnly
                required
                {...register("job_Type")} />
            </>
          ) : (
            <>
              <label htmlFor="job-type-select">
                Service: <span>*</span>
              </label>

              <select
                id="job-type-select"
                required>
                <option
                  value=""
                  disabled>
                  Please select a service:
                </option>
                {content}
              </select>
            </>
          )}

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
