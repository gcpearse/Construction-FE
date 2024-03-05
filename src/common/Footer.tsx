import { useState } from "react"
import { LuChevronUp } from "react-icons/lu"


const Footer: React.FC = () => {


  const [isVisible, setIsVisible] = useState<boolean>(false)


  window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop > 1200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }

  })


  return (
    <footer>

      <button
        className={!isVisible ? (
          "scroll-btn"
        ) : (
          "scroll-btn visible-scroll-btn"
        )}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}>
        <LuChevronUp />
      </button>

    </footer>
  )
}


export default Footer
