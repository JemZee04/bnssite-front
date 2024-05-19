import { selectIsAuth } from "../../../store/slices/credential/slectors"
import { useAppSelector } from "../../../store/store"
import { AuthPage } from "../../../widgets/auth/ui/Auth";

export const ProfilePage: React.FC = () => {

    const isAuth = useAppSelector(selectIsAuth);

    return (
        isAuth ? <div>Профль</div> : <AuthPage/>
    )
}