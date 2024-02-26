import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Service } from "../../models"
import { formatHeader } from "../../utils/formattingUtils"
import { closeServiceDeleter } from "./servicesSlice"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { useDeleteServiceMutation } from "../api/apiSlice"

type Props = {
  service: Service
}

type FormValues = {
  name: string
}

const ServiceDeleter: React.FC<Props> = ({ service }) => {

  const dispatch = useAppDispatch()

  const { isDeleterToggled, selectedService } = useAppSelector(state => state.services)

  const [{ token }] = useCookies(["token"])

  const [errorMsg, setErrorMsg] = useState<string>("")

  const [deleteService] = useDeleteServiceMutation()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<FormValues>()

  const submitForm: SubmitHandler<FormValues> = async ({ name }) => {
    const currentUser = localStorage.getItem("name")
    if (currentUser === name) {
      try {
        await deleteService({
          name: service.name,
          token: token
        }).unwrap()
      } catch (error: any) {
        console.log(error)
        setErrorMsg("Oops! Something went wrong...")
      }
      reset()
      dispatch(closeServiceDeleter())
      document.body.style.overflow = "auto"
      setErrorMsg("")
    } else {
      setErrorMsg("Incorrect admin name.")
    }
  }

  return (
    <div className={isDeleterToggled && selectedService === service.name ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">
          <h3>Delete {formatHeader(service.name)}</h3>
          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeServiceDeleter())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>
        </div>

        <h4>Warning!</h4>

        <p>Deleting this service will also delete all associated jobs. This process is irreversible. If you are sure you wish to proceed, please enter your admin name.</p>

        <form
          onSubmit={handleSubmit(submitForm)}
          onChange={() => setErrorMsg("")}>

          <label htmlFor={`delete-${service.name}-name-input`}>
            Admin name:
          </label>
          <input
            type="text"
            id={`delete-${service.name}-name-input`}
            autoComplete="true"
            required
            {...register("name")} />

          <button
            type="submit"
            className="modal-btn">
            DELETE
          </button>

          {errorMsg ? <p className="rtk-query-form-msg">{errorMsg}</p> : null}

        </form>

      </div>

    </div>
  )
}

export default ServiceDeleter
