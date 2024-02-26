import { useAppDispatch } from "../../app/hooks"
import { Service } from "../../models"
import { openImageUpdater, openServiceDeleter, openServiceUpdater } from "./servicesSlice"
import { FaCamera, FaTrashAlt } from "react-icons/fa"

type Props = {
  service: Service
}

const SingleService: React.FC<Props> = ({ service }) => {

  const dispatch = useAppDispatch()

  return (
    <div className="service-wrapper">

      {/* <img src={service.image} alt={`Image for ${service.name}`} /> */}
      {/* Using construction.jpg as an example during development */}
      <img src="/construction.jpg" alt={`Image for ${service.name}`} />
      <button
        className="edit-img-btn icon-btn"
        onClick={() => {
          dispatch(openImageUpdater(service.name))
          document.body.style.overflow = "hidden"
        }}>
        <FaCamera className="edit-img-icon" />
      </button>

      <h3>{service.name}</h3>

      <p>{service.description}</p>

      <div className="service-btn-wrapper">

        <button
          className="blue-btn"
          onClick={() => {
            dispatch(openServiceUpdater(service.name))
            document.body.style.overflow = "hidden"
          }}>
          Edit Description
        </button>

        <button
          className="delete-btn icon-btn"
          onClick={() => {
            dispatch(openServiceDeleter(service.name))
            document.body.style.overflow = "hidden"
          }}>
          <FaTrashAlt className="delete-icon" />
        </button>

      </div>

    </div>
  )
}

export default SingleService
