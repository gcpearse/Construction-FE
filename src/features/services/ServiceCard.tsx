import { useAppDispatch } from "../../app/hooks"
import { Service } from "../../models"
import { formatHeader } from "../../utils/formattingUtils"
import { openImageUpdater, openServiceDeleter, openServiceUpdater } from "./servicesSlice"
import { FaCamera, FaTrashAlt } from "react-icons/fa"


type Props = {
  service: Service
}


const ServiceCard: React.FC<Props> = ({ service }) => {


  const dispatch = useAppDispatch()


  return (
    <div className="service-wrapper">

      <div className="service-wrapper-top">

        <img src={service.image} alt={`An image representing ${service.name}.`} />

        <button
          className="edit-img-btn icon-btn"
          onClick={() => {
            dispatch(openImageUpdater(service.name))
            document.body.style.overflow = "hidden"
          }}>
          <FaCamera className="edit-img-icon" />
        </button>

        <h3>{formatHeader(service.name)}</h3>

        <p>{service.description}</p>

      </div>

      <div className="service-btn-wrapper">

        <button
          className="blue-btn rectangular-btn"
          onClick={() => {
            dispatch(openServiceUpdater(service.name))
            document.body.style.overflow = "hidden"
          }}>
          Update
        </button>

        <button
          className="yellow-btn icon-btn"
          onClick={() => {
            dispatch(openServiceDeleter(service.name))
            document.body.style.overflow = "hidden"
          }}>
          <FaTrashAlt className="btn-icon" />
        </button>

      </div>
    </div>
  )
}


export default ServiceCard
