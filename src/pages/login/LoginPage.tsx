import { Button, Input, Space } from "antd";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../store/slices/credential/asyncThunks";
import { useAppDispatch } from "../../store/store";



export const LoginPage: React.FC = () => {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const onLogin = () => {
        dispatch(loginThunk({
            body: {
                phone: phone,
                password: password
            }
        }))
    }

    const buildHandleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.currentTarget.value);
    }

    return (
        <Space size={20} direction='vertical' style={{ width: '100%' }}>
            <Input placeholder='Номер телефона' value={phone} onChange={buildHandleChange(setPhone)} />
            <Input placeholder="Пароль" value={password} onChange={buildHandleChange(setPassword)} />
            <Button onClick={onLogin}>Войти</Button>
        </Space>
    );
}
