import { Space, Button, Input } from "antd";
import { useState } from "react";
import { registrationThunk } from "../../../store/slices/credential/asyncThunks";
import { useAppDispatch } from "../../../store/store";

const Regist: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const dispatch = useAppDispatch();

    const onLogin = () => {
        dispatch(registrationThunk({

            userSignIn: {
                phone: phone,
                password: password,
                name: name
            }
        }))
    }

    const buildHandleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.currentTarget.value);
    }

    return (
        <Space size={20} direction='vertical' style={{ width: '100%' }}>
            <Input placeholder="Имя" value={name} onChange={buildHandleChange(setName)} />
            <Input placeholder='Номер телефона' value={phone} onChange={buildHandleChange(setPhone)} />
            <Input placeholder="Пароль" value={password} onChange={buildHandleChange(setPassword)} />
            <Button onClick={onLogin}>Зарегестрироваться</Button>
        </Space>
    );
}

export default Regist;