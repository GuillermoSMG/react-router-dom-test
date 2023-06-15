import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../model"
import { UserKey, resetUser } from "../../redux/states/user"
import { clearLocalStorage } from "../../utilities"

function Logout() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  }

  return (
    <button onClick={logout}>Log Out</button>
  )
}
export default Logout