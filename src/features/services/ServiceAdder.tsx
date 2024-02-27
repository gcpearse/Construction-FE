import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { closeServiceAdder } from "./servicesSlice"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"

type FormValues = {
  name: string
  description: string
  image: FileList
  icon: string
}

const ServiceAdder: React.FC = () => {

  const dispatch = useAppDispatch()

  const { isServiceAdderToggled } = useAppSelector(state => state.services)

  const [charLimit, setCharLimit] = useState<number>(0)

  const {
    register,
    handleSubmit
  } = useForm<FormValues>()

  const submitForm: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <div className={isServiceAdderToggled ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">
          <h3>Create Service</h3>
          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeServiceAdder())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>
        </div>

        <form onSubmit={handleSubmit(submitForm)}>

          <label htmlFor="service-name-input">
            Service name: <span>*</span>
          </label>
          <input
            type="text"
            id="service-name-input"
            autoComplete="true"
            required
            {...register("name")} />

          <label htmlFor="service-icon-input">
            Service icon: <span>*</span>
          </label>
          <input
            type="text"
            id="service-icon-input"
            autoComplete="true"
            required
            {...register("icon")} />

          <label htmlFor="service-description-input">
            Description of service: <span>*</span>
          </label>
          <textarea
            rows={5}
            id="service-description-input"
            autoComplete="true"
            maxLength={200}
            required
            {...register("description", {
              onChange: (e) => {
                setCharLimit(e.target.value.length)
              }
            })} />

          <p>{200 - charLimit} characters remaining.</p>

          <label htmlFor="service-image-input">
            Select an image: <span>*</span>
          </label>
          <input
            type="file"
            style={{
              marginTop: "0.5em",
              border: "none",
              borderRadius: 0,
              boxShadow: "none",
              padding: 0
            }}
            id="service-image-input"
            required
            {...register("image")} />

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

export default ServiceAdder
