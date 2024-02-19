import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { useGetBusinessInfoQuery } from "../features/api/apiSlice"

const Header: React.FC = () => {

  const {
    data: businessInfo
  } = useGetBusinessInfoQuery()

  return (
    <header>
      <ul>
        <li>
          <FaPhone className="header-icon" />&nbsp; {businessInfo?.phone}
        </li>
        <li>
          <FaEnvelope className="header-icon" />&nbsp; {businessInfo?.email}
        </li>
      </ul>
    </header>
  )
}

export default Header
