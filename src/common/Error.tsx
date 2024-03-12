import { useNavigate } from "react-router-dom"


type Props = {
  statusCode: number
  message: string
  btnText: string
  nav?: number
  url?: string
}


const Error: React.FC<Props> = ({ statusCode, message, btnText, nav, url }) => {


  const navigate = useNavigate()


  return (
    <div className="error-wrapper">

      <h2>{statusCode}</h2>

      <p>{message}</p>

      <button
        className="blue-btn rectangular-btn"
        onClick={() => {
          if (nav) navigate(nav)
          if (url) navigate(url)
        }}>
        {btnText}
      </button>

    </div>
  )
}


export default Error
