import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

const Header: React.FC = () => {
  return (
    <header>
      <ul>
        <li>
          <p>
            <FaPhone className="header-icon" />&nbsp; +44 (0) 7890 123 456
          </p>
        </li>
        <li>
          <p>
            <FaEnvelope className="header-icon" />&nbsp; info@construction.co.uk
          </p>
        </li>
      </ul>
    </header>
  )
}

export default Header
