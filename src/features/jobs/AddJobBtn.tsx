import { FaPlus } from "react-icons/fa"


const AddJobBtn: React.FC = () => {


  const handleClick = () => {
    console.log("Clicked")
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
