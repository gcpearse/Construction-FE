import { FaEnvelope, FaFacebook, FaInfo, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPen, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa"
import { useGetBusinessInfoQuery } from "../../../api/apiSlice"

const BusinessInfoDisplay: React.FC = () => {

  const {
    data: businessInfo,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetBusinessInfoQuery()

  let content

  if (isLoading) content = <p>Loading content...</p>

  if (isError) {
    console.log(error)
    content = <p>Oops! Something went wrong...</p>
  }

  if (isSuccess) content = (
    <div className="business-info-table">
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
    <div className="business-info-wrapper">
      <h3>Your Business Details</h3>
      {content}
      <button className="dashboard-btn">Update</button>
    </div>
  )
}

export default BusinessInfoDisplay
