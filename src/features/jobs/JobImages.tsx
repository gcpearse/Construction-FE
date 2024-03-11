import { useState } from "react"
import { JobImage } from "../../models"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"


type Props = {
  images: JobImage[] | undefined
}


const JobImages: React.FC<Props> = ({ images }) => {


  const [currentImage, setCurrentImage] = useState<number>(0)


  if (images) return (
    <>
      <img
        src={images[currentImage].image}
        alt="An image related to the job."
        className="job-img" />

      <div className="job-images-btns-wrapper">

        <button
          className="blue-btn icon-btn"
          onClick={() => setCurrentImage(currentImage - 1)}
          disabled={currentImage <= 0}>
          <FaAngleLeft className="btn-icon" />
        </button>

        <p>{currentImage + 1} / {images.length}</p>

        <button
          className="blue-btn icon-btn"
          onClick={() => setCurrentImage(currentImage + 1)}
          disabled={currentImage >= images.length - 1}>
          <FaAngleRight className="btn-icon" />
        </button>

      </div>
    </>
  )
}


export default JobImages
