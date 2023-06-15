import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../model';
import { AppStore } from '../redux/store';

interface Props {
  priv: boolean;
}

const PrivValidation = <Outlet />;
const PublicValidation = (
  <Navigate
    replace
    to={PrivateRoutes.PRIVATE}
  />
);

export const AuthGuard = ({ priv }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name ? (
    priv ? (
      PrivValidation
    ) : (
      PublicValidation
    )
  ) : (
    <Navigate
      replace
      to={PublicRoutes.LOGIN}
    />
  );
};

export default AuthGuard;
