import { FaRegWindowClose } from "react-icons/fa"
import { Service } from "../../models"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { closeServiceForm } from "./servicesSlice"
import { formatHeader } from "../../utils/formattingUtils"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useState } from "react"
import { useUpdateServiceDescriptionMutation } from "../api/apiSlice"

type Props = {
  service: Service
}

type FormValues = {
  description: string
}

const ServiceUpdater: React.FC<Props> = ({ service }) => {

  const { name, image, icon } = service

  const dispatch = useAppDispatch()

  const { isFormToggled, selectedService } = useAppSelector(state => state.services)

  const [{ token }] = useCookies(["token"])

  const [errorMsg, setErrorMsg] = useState<string>("")

  const [updateServiceDescription] = useUpdateServiceDescriptionMutation()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<FormValues>({
    defaultValues: {
      description: service.description
    },
    values: {
      description: service.description
    }
  })

  const submitForm: SubmitHandler<FormValues> = async (serviceDetails) => {
    try {
      await updateServiceDescription({
        service: {
          name: name,
          description: serviceDetails.description,
          image: image,
          icon: icon
        },
        token: token
      }).unwrap()
      dispatch(closeServiceForm())
      document.body.style.overflow = "auto"
      setErrorMsg("")
    } catch (error: any) {
      console.log(error)
      setErrorMsg("Oops! Something went wrong...")
    }
  }

  return (
    <div className={isFormToggled && selectedService === service.name ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">
          <h3>Edit {formatHeader(service.name)} Description</h3>
          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeServiceForm())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>
        </div>

        <form onSubmit={handleSubmit(submitForm)}>

          <label htmlFor="service-description-input">
            Service description: <span>*</span>
          </label>
          <textarea
            rows={5}
            id="service-description-input"
            autoComplete="true"
            required
            {...register("description")} />

          <p>* Indicates a required field.</p>

          <div className="modal-btn-wrapper">

            <button
              type="button"
              className="modal-btn-small"
              onClick={() => reset({
                description: service.description
              })}>
              Reset
            </button>

            <button
              type="reset"
              className="modal-btn-small">
              Clear
            </button>

          </div>

          <button
            type="submit"
            className="modal-btn">
            Submit
          </button>

          {errorMsg ? <p className="rtk-query-form-msg">{errorMsg}</p> : null}

        </form>

      </div>

    </div>
  )
}

export default ServiceUpdater
