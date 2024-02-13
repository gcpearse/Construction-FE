import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

const Header: React.FC = () => {
  return (
    <header>
      <ul>
        <li>
          <FaPhone className="header-icon" />&nbsp; +44 (0) 1234 567 890
        </li>
        <li>
          <FaEnvelope className="header-icon" />&nbsp; info@example.example
        </li>
      </ul>
    </header>
  )
}

export default Header
