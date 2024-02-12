import { job } from "../../models"

type Props = {
  job: job
}

const Job: React.FC<Props> = ({ job }) => {
  return (
    <p>{job.title}</p>
  )
}

export default Job
