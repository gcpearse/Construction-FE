type Props = {
  children: React.ReactNode
  showImages: boolean
}


const JobImageViewer: React.FC<Props> = ({ children, showImages }) => {


  return (
    showImages ? children : null
  )
}


export default JobImageViewer
