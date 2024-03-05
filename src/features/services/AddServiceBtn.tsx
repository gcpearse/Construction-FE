import { FaPlus } from "react-icons/fa"
import { useAppDispatch } from "../../app/hooks"
import { openServiceAdder } from "./servicesSlice"


const AddServiceBtn: React.FC = () => {


  const dispatch = useAppDispatch()

  
  const handleClick = () => {
    dispatch(openServiceAdder())
    document.body.style.overflow = "hidden"
  }


  return (
    <>

      <button
        className="yellow-btn rectangular-btn large-display-el"
        style={{ marginRight: "1em" }}
        onClick={() => handleClick()}>
        Create Service
      </button>

      <button
        className="yellow-btn icon-btn small-display-el"
        style={{ marginRight: "1em" }}
        onClick={() => handleClick()}>
        <FaPlus className="btn-icon" />
      </button>

    </>
  )
}


export default AddServiceBtn
