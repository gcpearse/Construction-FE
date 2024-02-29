import { useState } from "react"
import { useCookies } from "react-cookie"
import { useGetBusinessInfoQuery, useUpdateBusinessInfoMutation } from "../../../api/apiSlice"
import { SubmitHandler, useForm } from "react-hook-form"
import { BusinessInfo } from "../../../../models"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { FaRegWindowClose } from "react-icons/fa"
import { closeBusinessInfoForm } from "./businessInfoSlice"


const BusinessInfoUpdater: React.FC = () => {


  const dispatch = useAppDispatch()

  const isFormToggled = useAppSelector(state => state.businessInfo.isFormToggled)

  const [{ token }] = useCookies(["token"])

  const [errorMsg, setErrorMsg] = useState<string>("")

  const {
    data: info
  } = useGetBusinessInfoQuery()

  const [updateBusinessInfo] = useUpdateBusinessInfoMutation()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<BusinessInfo>({
    defaultValues: info,
    values: info
  })


  const submitForm: SubmitHandler<BusinessInfo> = async (businessInfo: BusinessInfo) => {

    try {
      await updateBusinessInfo({
        businessInfo: businessInfo,
        token: token
      }).unwrap()

      dispatch(closeBusinessInfoForm())

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
    <div className={isFormToggled ? (
      "modal-form-overlay"
    ) : (
      "modal-form-overlay closed-modal"
    )}>

      <div className="modal-form-wrapper">

        <div className="modal-form-top">

          <h3>Edit Business Details</h3>

          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeBusinessInfoForm())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>

        </div>

        <form onSubmit={handleSubmit(submitForm)}>

          <label htmlFor="business-name-input">
            Business name: <span>*</span>
          </label>

          <input
            type="text"
            id="business-name-input"
            autoComplete="true"
            required
            {...register("name")} />

          <label htmlFor="business-email-input">
            E-mail address: <span>*</span>
          </label>

          <input
            type="text"
            id="business-email-input"
            autoComplete="true"
            required
            {...register("email")} />

          <label htmlFor="business-phone-input">
            Contact number: <span>*</span>
          </label>

          <input
            type="text"
            id="business-phone-input"
            autoComplete="true"
            required
            {...register("phone")} />

          <label htmlFor="business-address-input">
            Street address: <span>*</span>
          </label>

          <input
            type="text"
            id="business-address-input"
            autoComplete="true"
            required
            {...register("address")} />

          <label htmlFor="business-city-input">
            Town / City: <span>*</span>
          </label>

          <input
            type="text"
            id="business-city-input"
            autoComplete="true"
            required
            {...register("city")} />

          <label htmlFor="business-info-input">
            Business description: <span>*</span>
          </label>

          <textarea
            rows={5}
            id="business-info-input"
            autoComplete="true"
            required
            {...register("info")} />

          <label htmlFor="business-facebook-input">
            Facebook link:
          </label>

          <input
            type="text"
            id="business-facebook-input"
            autoComplete="true"
            {...register("facebook")} />

          <label htmlFor="business-instagram-input">
            Instagram link:
          </label>

          <input
            type="text"
            id="business-instagram-input"
            autoComplete="true"
            {...register("instagram")} />

          <label htmlFor="business-youtube-input">
            YouTube link:
          </label>

          <input
            type="text"
            id="business-youtube-input"
            autoComplete="true"
            {...register("youtube")} />

          <label htmlFor="business-tiktok-input">
            TikTok link:
          </label>

          <input
            type="text"
            id="business-tiktok-input"
            autoComplete="true"
            {...register("tiktok")} />

          <label htmlFor="business-linkedin-input">
            LinkedIn link:
          </label>

          <input
            type="text"
            id="business-linkedin-input"
            autoComplete="true"
            {...register("linkedin")} />

          <p>* Indicates a required field.</p>

          <div className="modal-btn-wrapper">

            <button
              type="button"
              className="modal-btn-small"
              onClick={() => reset(info)}>
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


export default BusinessInfoUpdater
