import { FaRegWindowClose } from "react-icons/fa"
import { Service } from "../../models"
import { formatHeader } from "../../utils/formattingUtils"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { closeImageUpdater } from "./servicesSlice"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useUpdateServiceImageMutation } from "../api/apiSlice"
import { useState } from "react"


type Props = {
  service: Service
}


type FormValues = {
  image: FileList
}


const ServiceImageUpdater: React.FC<Props> = ({ service }) => {


  const dispatch = useAppDispatch()

  const {
    isImageUpdaterToggled,
    selectedService
  } = useAppSelector(state => state.services)

  const [{ token }] = useCookies()

  const [errorMsg, setErrorMsg] = useState<string>("")

  const [updateServiceImage] = useUpdateServiceImageMutation()

  const {
    register,
    handleSubmit
  } = useForm<FormValues>()


  const submitForm: SubmitHandler<FormValues> = async ({ image }) => {

    const formData = new FormData()
    formData.append("image", image[0])

    try {
      await updateServiceImage({
        name: service.name,
        image: formData,
        token: token
      }).unwrap()

      dispatch(closeImageUpdater())

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
    <div className={isImageUpdaterToggled && selectedService === service.name ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">

          <h3>Change {formatHeader(service.name)} Image</h3>

          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeImageUpdater())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>

        </div>

        <form onSubmit={handleSubmit(submitForm)}>

          <label htmlFor={`${service.name}-image-input`}>
            Select an image:
          </label>

          {/* Inline styling required because of dynamic ID */}
          <input
            type="file"
            style={{
              marginTop: "0.5em",
              border: "none",
              borderRadius: 0,
              boxShadow: "none",
              padding: 0
            }}
            id={`${service.name}-image-input`}
            required
            {...register("image")} />

          <button className="modal-btn">
            Submit
          </button>

          {errorMsg ? <p className="rtk-query-form-msg">{errorMsg}</p> : null}

        </form>
      </div>
    </div>
  )
}


export default ServiceImageUpdater
