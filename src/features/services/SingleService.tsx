import { useAppDispatch } from "../../app/hooks"
import { Service } from "../../models"
import { openServiceForm } from "./servicesSlice"

type Props = {
  service: Service
}

const SingleService: React.FC<Props> = ({ service }) => {

  const dispatch = useAppDispatch()

  return (
    <>
      <img src={service.image} alt={`Image for ${service.name}`} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <div>
        <button
          onClick={() => {
            dispatch(openServiceForm(service.name))
            document.body.style.overflow = "hidden"
          }}>
          Edit
        </button>
        <button>Delete</button>
      </div>
    </>
  )
}

export default SingleService
