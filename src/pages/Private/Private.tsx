import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../model"
import { RoutesWithNotFound } from "../../utilities"
import { lazy } from "react"
import { Logout } from "../../components/Logout"

const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Home = lazy(() => import('./Home/Home'))

function Private() {
  return (
    <>
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFound>
      <Logout />
    </>
  ) 
}
export default Private