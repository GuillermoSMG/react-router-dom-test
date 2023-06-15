import { useDispatch } from "react-redux"
import { getMorty } from "../../services"
import { UserKey, createUser, resetUser } from "../../redux/states/user"
import { useNavigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes, Roles } from "../../model"
import { useEffect } from "react"
import { clearLocalStorage } from "../../utilities"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  }, [])
  

  const login = async() => {
    try {
    const result = await getMorty()
    dispatch(createUser({...result, role: Roles.USER}))
    navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true})
    } catch (error) {
      throw new Error()
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  )
}
export default Login