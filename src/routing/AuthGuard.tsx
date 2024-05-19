import { Navigate, Outlet } from "react-router"
import { AUTH_PATH } from "../shared/utils/constants"
import { selectIsAuth } from "../store/slices/credential/slectors"
import { useAppSelector } from "../store/store"


export const AuthGuard: React.FC = () => {

    const isAuth = useAppSelector(selectIsAuth)

    return isAuth
        ? <Outlet />
        : <Navigate to={AUTH_PATH} />
}
