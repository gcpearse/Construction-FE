import { IoClose, IoMenu } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { toggleSidebar } from "../features/sidebar/sidebarSlice"
import NavMenu from "./NavMenu"
import { useGetBusinessInfoQuery } from "../features/api/apiSlice"

const Nav: React.FC = () => {

  const isSidebarVisible = useAppSelector((state) => state.sidebar.visibleSidebar)
  const dispatch = useAppDispatch()

  const {
    data: businessInfo
  } = useGetBusinessInfoQuery()

  return (
    <nav>
      <h1>{businessInfo?.name}</h1>
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
