import { NavLink } from "react-router-dom"


const NavMenu: React.FC = () => {


  return (
    <ul className="nav-menu">

      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/services">
          Services
        </NavLink>
      </li>

      <li>
        <NavLink to="/admin">
          Admin
        </NavLink>
      </li>

    </ul>
  )
}


export default NavMenu
