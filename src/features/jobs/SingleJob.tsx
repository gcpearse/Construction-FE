import { Job } from "../../models"

type Props = {
  job: Job
}

const SingleJob: React.FC<Props> = ({ job }) => {
  return (
    <p>{job.title}</p>
  )
}

export default SingleJob
