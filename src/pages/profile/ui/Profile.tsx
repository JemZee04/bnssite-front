import { Avatar, Button, Col, Collapse, ConfigProvider, Input, Row } from "antd";
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
            <ConfigProvider
            theme={{
                token: {
                    colorText: "#FFFFFF",
                    colorBgContainer: "#FFFFFF"
                },
                components: {
                    Input: {
                        colorBgBase: "#FFFFFF",
                        activeBg: "#FFFFFF",
                        addonBg: "#FFFFFF",
                        colorBgContainerDisabled: "#FFFFFF",
                        colorTextDisabled: "#000000"
                    }
                }
            }}
            >
            <div>
                <p style={{fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 20, color: "#FFFFFF"}}>Имя</p>
                <Input placeholder="Имя..." value={profile?.name} disabled/>
            </div>
           
           <div style={{padding: "0 0 15px"}}>
                <p style={{fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 20, color: "#FFFFFF"}}>Телефон</p>
                <Input placeholder="Телефон..." value={profile?.phone} disabled/>
           </div>
           </ConfigProvider>
           <div>
                <p style={{fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 20, color: "#FFFFFF"}}>Заказы</p>
                <>
                {
                    isLoading
                    ?   <p style={{fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 16, color: "#C7C7C7"}}>Загрузка...</p>
                    :   data?.length === 0 || data === undefined
                        ?   <p style={{fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 16, color: "#C7C7C7"}}>Нет заказов</p>
                        : 
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorText: "#FFFFFF",
                                    colorTextDisabled: "#C7C7C7",
                                    colorPrimary: "#6712FB"
                                },
                            }}
                        >
                        <Collapse bordered={false} items={data?.map((item, index) => {
                            return {
                                key: index,
                                label: <OrderHeader id={index + 1} statusName={item.status ?? ""} dateOrder={new Date(item.date ?? "")} countItems={item.productItems?.length ?? 1} totalCost={item.totalPrice ?? 0}/>,
                                children: <OrderCardList status={item.status ?? "Заказ выдан"} productItems={item.productItems ?? []}/>
                            }
                        })} /> 
                        </ConfigProvider>
                }
                </>
                
           </div>

           <Button onClick={() => dispatch(logout())}>Выйти из аккаунт</Button>
        </div>
    )
}

export default Profile;