import { FaRegWindowClose } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { Job } from "../../../models"
import { closeJobImageAdder } from "../jobsSlice"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAddJobImageMutation } from "../../api/apiSlice"
import { useCookies } from "react-cookie"
import { useState } from "react"


type Props = {
  job: Job
}

type FormValues = {
  image: FileList
}


const JobImageAdder: React.FC<Props> = ({ job }) => {


  const dispatch = useAppDispatch()

  const { isJobImageAdderToggled } = useAppSelector(state => state.jobs)

  const {
    register,
    handleSubmit,
    reset
  } = useForm<FormValues>()

  const [{ token }] = useCookies()

  const [errorMsg, setErrorMsg] = useState<string>("")

  const [addJobImage] = useAddJobImageMutation()

  
  const submitForm: SubmitHandler<FormValues> = async ({ image }) => {

    const formData = new FormData()
    formData.append("image", image[0])

    try {
      await addJobImage({
        image: formData,
        id: job.job_Id,
        token: token
      }).unwrap()

      reset()

      dispatch(closeJobImageAdder())

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
    <div className={isJobImageAdderToggled ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">

          <h3>Add Image</h3>

          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeJobImageAdder())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>

        </div>

        <form onSubmit={handleSubmit(submitForm)}>

          <label htmlFor="job-image-input">
            Select an image:
          </label>

          <input
            type="file"
            className="image-input"
            style={{
              marginTop: "0.5em",
              border: "none",
              borderRadius: 0,
              boxShadow: "none",
              padding: 0
            }}
            id="job-image-input"
            required
            {...register("image")} />

          <button className="modal-btn blue-btn">
            Submit
          </button>

          {errorMsg ? <p className="rtk-query-form-msg">{errorMsg}</p> : null}

        </form>
      </div>
    </div>
  )
}


export default JobImageAdder
