import { Link } from "react-router-dom"
import { useGetBusinessInfoQuery } from "../features/api/apiSlice"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa"


const HomePage: React.FC = () => {


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
    <div className="home-page-content">

      <h2>{businessInfo.name}</h2>

      <p>{businessInfo.info}</p>

      <Link
        className="home-page-link"
        to="/services">
        View our services
      </Link>

      <div className="home-page-icons-wrapper">

        {businessInfo.facebook ? (
          <FaFacebook />
        ) : (
          null
        )}

        {businessInfo.instagram ? (
          <FaInstagram />
        ) : (
          null
        )}

        {businessInfo.youtube ? (
          <FaYoutube />
        ) : (
          null
        )}

        {businessInfo.linkedin ? (
          <FaLinkedin />
        ) : (
          null
        )}

        {businessInfo.tiktok ? (
          <FaTiktok />
        ) : (
          null
        )}

      </div>
    </div>
  )


  return (
    <section className="home-page-wrapper">

      {content}

    </section>
  )
}


export default HomePage
