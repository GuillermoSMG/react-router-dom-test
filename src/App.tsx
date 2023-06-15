import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'
import AuthGuard from './guard/auth.guard'
import { PrivateRoutes, PublicRoutes, Roles } from './model'
import store from './redux/store'
import { RoutesWithNotFound } from './utilities'
import RoleGuard from './guard/role.guard'

const Dashboard = lazy(() => import('./pages/Private/Dashboard/Dashboard'))
const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />  } />
              <Route path={PublicRoutes.LOGIN} element={<Login />  } />
              <Route element={<AuthGuard priv={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private /> } />
              </Route>
              <Route element={<RoleGuard role={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
