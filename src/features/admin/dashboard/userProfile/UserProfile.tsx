import { useState } from "react"
import { FaRegWindowClose, FaUser } from "react-icons/fa"
import Logout from "./Logout"

const UserProfile: React.FC = () => {

  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)

  return (
    <>
      <button
        className={!isProfileOpen ? (
          "user-profile-btn icon-btn"
        ) : (
          "user-profile-btn icon-btn user-profile-btn-clicked"
        )}
        onClick={() => setIsProfileOpen(!isProfileOpen)}>
        <FaUser className="user-profile-icon" />
      </button>

      {isProfileOpen ? (
        <div className="open-profile-wrapper">

          <button
            className="window-close-btn open-profile-btn"
            onClick={() => setIsProfileOpen(false)}>
            <FaRegWindowClose className="window-close-icon" />
          </button>

          <p>Hello, {localStorage.getItem("name")}!</p>

          <Logout />

        </div>
      ) : (
        null
      )}
    </>
  )
}

export default UserProfile
