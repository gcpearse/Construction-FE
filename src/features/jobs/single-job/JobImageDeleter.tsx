import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { JobImage } from "../../../models"
import { closeJobImageDeleter } from "../jobsSlice"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import { useDeleteJobImageMutation } from "../../api/apiSlice"
import { useCookies } from "react-cookie"


type Props = {
  image: JobImage
}

type FormValues = {
  name: string
}


const JobImageDeleter: React.FC<Props> = ({ image }) => {


  const dispatch = useAppDispatch()

  const { isJobImageDeleterToggled } = useAppSelector(state => state.jobs)

  const [{ token }] = useCookies(["token"])

  const [errorMsg, setErrorMsg] = useState<string>("")

  const [deleteJobImage] = useDeleteJobImageMutation()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<FormValues>()


  const submitForm: SubmitHandler<FormValues> = async ({ name }) => {

    const currentUser = localStorage.getItem("name")

    if (currentUser === name) {
      try {
        await deleteJobImage({
          id: image.image_Id,
          token: token
        }).unwrap()

        reset()

        dispatch(closeJobImageDeleter())

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

    } else {
      setErrorMsg("Incorrect admin name.")
    }
  }


  return (
    <div className={isJobImageDeleterToggled ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">

          <h3>Delete Image</h3>

          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeJobImageDeleter())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>

        </div>

        <div className="modal-form-text-wrapper">

          <h4>Delete this image?</h4>

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


export default JobImageDeleter
