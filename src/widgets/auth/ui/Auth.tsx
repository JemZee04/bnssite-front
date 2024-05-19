import { Tabs } from "antd";
import { useMemo } from "react";
import { LoginPage } from "../../../pages/login/LoginPage";
import Regist from "../../regist/ui/Regist";
// import { RegistrationPage } from "./RegistrationPage";
// import { LoginPage } from "./LoginPage";



export const AuthPage: React.FC = () => {

    const items = useMemo(() => [
        {
            key: '1',
            label: 'Войти',
            children: <LoginPage/>,
        },
        {
            key: '2',
            label: 'Регистрация',
            children: <Regist/>,
        },
    ], [])

    return (
        <div style={{
            height: 400,
            width: 350,
            margin: '0 auto'
        }}>
            <Tabs defaultActiveKey="1" items={items} />
        </div>

    );
}
