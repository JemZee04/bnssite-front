import { Avatar, Button, Col, Collapse, Input, Row } from "antd";
import { useEffect } from "react";
import OrderCardList from "../../../components/orderCard/OrderCardsList";
import OrderHeader from "../../../components/orderCard/OrderHeader";
import { useGetUserOrdersUsersByUserIdQuery } from "../../../store/beekneesApi";
import { logout } from "../../../store/slices/credential/credentialSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import styles from "./Profile.module.css";

const Profile: React.FC = () => {
    const profile = useAppSelector(state => state.credentialReducer.profile);
    
    const dispatch = useAppDispatch();
    const {data, isLoading, isError} = useGetUserOrdersUsersByUserIdQuery({"user-id": profile?.id ?? ""});

    useEffect(() => {
        console.log(data);
    }, [isLoading])

    return(
        <div className={styles.DivProfile}>
            <div>
                <p>Имя</p>
                <Input placeholder="Имя..." value={profile?.name} disabled/>
            </div>
           
           <div>
                <p>Телефон</p>
                <Input placeholder="Телефон..." value={profile?.phone} disabled/>
           </div>

           <div>
                <p>Заказы</p>
                <>
                {
                    isLoading
                    ?   <p>Загрузка...</p>
                    :   data?.length === 0 || data === undefined
                        ?   <p>Нет заказов</p>
                        : <Collapse bordered={false} items={data?.map((item, index) => {
                            return {
                                key: index,
                                label: <OrderHeader id={index + 1} statusName={item.status ?? ""} dateOrder={new Date(item.date ?? "")} countItems={item.productItems?.length ?? 1} totalCost={item.totalPrice ?? 0}/>,
                                children: <OrderCardList status={item.status ?? "Заказ выдан"} productItems={item.productItems ?? []}/>
                            }
                        })} /> 
                }
                </>
                
           </div>

           <Button onClick={() => dispatch(logout())}>Выйти из аккаунт</Button>
        </div>
    )
}

export default Profile;