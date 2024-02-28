import { MdDashboard } from "react-icons/md"
import { Link } from "react-router-dom"


const DashNavBtn: React.FC = () => {


  return (
    <>

      <Link to="/admin">
        <button className="blue-btn large-display-el">
          <p>Dashboard</p>
        </button>
      </Link>

      <Link to="/admin">
        <button className="blue-icon-btn icon-btn small-display-el">
          <MdDashboard className="btn-icon" />
        </button>
      </Link>

    </>
  )
}


export default DashNavBtn
