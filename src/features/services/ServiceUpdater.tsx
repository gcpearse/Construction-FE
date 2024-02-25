import { FaRegWindowClose } from "react-icons/fa"
import { Service } from "../../models"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { closeServiceForm } from "./servicesSlice"

type Props = {
  service: Service
}

const ServiceUpdater: React.FC<Props> = ({ service }) => {

  const dispatch = useAppDispatch()

  const { isFormToggled, selectedService } = useAppSelector(state => state.services)

  return (
    <div className={isFormToggled && selectedService === service.name ? (
      "business-info-form-overlay open-element"
    ) : (
      "business-info-form-overlay closed-element"
    )}>

      <div className="business-info-form-wrapper">

        <div className="business-info-form-top">
          <h3>Edit {service.name} Details</h3>
          <button
            className="window-close-btn"
            onClick={() => {
              dispatch(closeServiceForm())
              document.body.style.overflow = "auto"
            }}>
            <FaRegWindowClose className="window-close-icon" />
          </button>
        </div>

      </div>

    </div>
  )
}

export default ServiceUpdater
