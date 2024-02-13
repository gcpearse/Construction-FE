import { IoClose, IoMenu } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { toggleSidebar } from "../features/sidebar/sidebarSlice"
import NavMenu from "./NavMenu"

const Nav: React.FC = () => {

  const isSidebarVisible = useAppSelector((state) => state.sidebar.visibleSidebar)
  const dispatch = useAppDispatch()

  return (
    <nav>
      <h1>Construction</h1>
      <NavMenu />
      {isSidebarVisible ? (
        <IoClose
          className="nav-icon"
          onClick={() => dispatch(toggleSidebar())} />
      ) : (
        <IoMenu
          className="nav-icon"
          onClick={() => dispatch(toggleSidebar())} />
      )}
    </nav>
  )
}

export default Nav
