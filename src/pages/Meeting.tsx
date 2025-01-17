import { useParams } from "react-router-dom"

const Meeting = () => {
  const {id} = useParams();

  return (
    <div>Meeting {id}</div>
  )
}

export default Meeting