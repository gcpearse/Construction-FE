import { FaPlus } from "react-icons/fa"
import { useAppDispatch } from "../../app/hooks"
import { openJobAdder } from "./jobsSlice"


type Props = {
  service: string | undefined
}


const AddJobBtn: React.FC<Props> = ({ service }) => {


  const dispatch = useAppDispatch()


  const handleClick = () => {
    dispatch(openJobAdder(service))
    document.body.style.overflow = "hidden"
  }


  return (
    <>

      <button
        className="yellow-btn large-display-el"
        style={{ marginRight: "1em" }}
        onClick={() => handleClick()}>
        Create Job
      </button>

      <button
        className="yellow-icon-btn icon-btn small-display-el"
        style={{ marginRight: "1em" }}
        onClick={() => handleClick()}>
        <FaPlus className="btn-icon" />
      </button>

    </>
  )
}


export default AddJobBtn
