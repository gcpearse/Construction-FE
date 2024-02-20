import { Link } from "react-router-dom"

const JobsBoard: React.FC = () => {
  return (
    <div className="page-wrapper">

      <div className="page-top">
        <h2>Jobs</h2>
        <Link to="/admin">
          <button className="dash-nav-btn">
            Dashboard
          </button>
        </Link>
      </div>

    </div>
  )
}

export default JobsBoard
