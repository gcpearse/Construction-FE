import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { openJobAdder } from "./jobsSlice"


const FloatingJobBtns: React.FC = () => {


  const dispatch = useAppDispatch()

  const navigate = useNavigate()


  return (
    <div className="floating-btns-wrapper">

      <button
        className="yellow-btn floating-btn"
        onClick={() => {
          dispatch(openJobAdder())
        }}>
        Create New Job
      </button>

      <button
        className="blue-btn floating-btn"
        onClick={() => {
          navigate("/admin/jobs")
        }}>
        Return to Jobs Board
      </button>

    </div>
  )
}


export default FloatingJobBtns
