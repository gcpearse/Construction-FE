import { Service } from "../../../models"


type Props = {
  service: Service
}


const PublicService: React.FC<Props> = ({ service }) => {


  return (
    <>
      <img src={service.image} alt={`An image representing ${service.name}`} />

      <div className="public-service-text">

        <h3>{service.name}</h3>

        <p>{service.description}</p>

      </div>
    </>
  )
}


export default PublicService
