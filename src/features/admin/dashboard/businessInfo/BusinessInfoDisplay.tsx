import { FaEnvelope, FaFacebook, FaInfo, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPen, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa"
import { useGetBusinessInfoQuery } from "../../../api/apiSlice"
import { useAppDispatch } from "../../../../app/hooks"
import { openBusinessInfoForm } from "./businessInfoSlice"

const BusinessInfoDisplay: React.FC = () => {

  const dispatch = useAppDispatch()

  const {
    data: businessInfo,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetBusinessInfoQuery()

  let content

  if (isLoading) content = <p className="rtk-query-msg">Loading content...</p>

  if (isError) {
    console.log(error)
    content = <p className="rtk-query-msg">Oops! Something went wrong...</p>
  }

  if (isSuccess) content = (
    <div className="dash-comp-content business-info-table">

      <div className="business-info-row">
        <FaInfo className="business-info-icon" />
        <p>{businessInfo.name}</p>
      </div>

      <div className="business-info-row">
        <FaEnvelope className="business-info-icon" />
        <p>{businessInfo.email}</p>
      </div>

      <div className="business-info-row">
        <FaPhone className="business-info-icon" />
        <p>{businessInfo.phone}</p>
      </div>

      <div className="business-info-row">
        <FaMapMarkerAlt className="business-info-icon" />
        <p>{businessInfo.address}</p>
        <p>{businessInfo.city}</p>
      </div>

      <div className="business-info-row">
        <FaPen className="business-info-icon" />
        <p>{businessInfo.info}</p>
      </div>

      <div className="business-info-row">
        <FaFacebook className="business-info-icon" />
        <p>{businessInfo.facebook}</p>
      </div>

      <div className="business-info-row">
        <FaInstagramSquare className="business-info-icon" />
        <p>{businessInfo.instagram}</p>
      </div>

      <div className="business-info-row">
        <FaYoutube className="business-info-icon" />
        <p>{businessInfo.youtube}</p>
      </div>

      <div className="business-info-row">
        <FaTiktok className="business-info-icon" />
        <p>{businessInfo.tiktok}</p>
      </div>

      <div className="business-info-row">
        <FaLinkedin className="business-info-icon" />
        <p>{businessInfo.linkedin}</p>
      </div>

    </div>
  )

  return (
    <div className="dash-comp-wrapper">

      <h3>Your Business Details</h3>

      {content}

      <button
        className="dashboard-btn"
        onClick={() => {
          dispatch(openBusinessInfoForm())
          document.body.style.overflow = "hidden"
        }}>
        Update
      </button>

    </div>
  )
}

export default BusinessInfoDisplay
