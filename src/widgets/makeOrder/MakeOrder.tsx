import OrderInfo from "../orderInfo/OrderInfo";
import { Map } from '@pbe/react-yandex-maps';
import styles from "./MakeOrder.module.css";
import PlaceMap from "../../components/placeMap/PlaceMap";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { cartSelectors, deleteAllFromCart } from "../../store/slices/cart";
import { useNavigate } from "react-router-dom";
import { usePostUserOrdersUsersByUserIdMutation } from "../../store/beekneesApi";


type MakeOrderProps = {
    totalCount: number;
    deliveryCost: number;
    totalCost: number;
};

const MakeOrder: React.FC<MakeOrderProps> = ({totalCost, deliveryCost, totalCount}) => {
    const [places, setPlaces] = useState<boolean[]>(new Array(10).fill(false));
    const products = useAppSelector(cartSelectors.selectAll);
    const userId = useAppSelector(state => state.credentialReducer.profile?.id);
    const userPhone = useAppSelector(state => state.credentialReducer.profile?.phone);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [createOrder, {data, isLoading, isError}] = usePostUserOrdersUsersByUserIdMutation();

    const clickPlace = (i: number) => {
        setPlaces(places.map((_, index) => i === index ? true : false));
    }

    useEffect(() => {
        console.log(products);
        console.log(userId);
        console.log(userPhone);
    }, [])

    const clickHandker = () => {
        createOrder({"user-id": userId ?? "", createOrder: {
            userId: userId,
            totalPrice: totalCost,
            status: "Заказ оформлен",
            productItems: products.map(item => {
                return {
                    productItemId: item.id,
                    sizeId: (item.sizes !== undefined && item.sizes.length !== 0) ? item.sizes[0].id : "51ff12e3-3fe0-4193-a374-3911d9a7a693",
                    colorId: (item.colors !== undefined && item.colors.length) ? item.colors[0].id : "64f9cb44-4cee-445d-a269-0c20b4d512e4",
                    shopId: item.shop?.id,
                    quantity: item.count
                }
            })
        }})
        dispatch(deleteAllFromCart());
        navigate(-1);
    }

    return(
        <div>
            <OrderInfo totalCount={totalCount} deliveryCost={deliveryCost} totalCost={totalCost}/>
            <Map 
                className={styles.MapDiv} 
                defaultState={{ 
                    center: [45.035470, 38.975313], 
                    zoom: 12,
                    controls: ["zoomControl", "fullscreenControl"] }} 
                modules={["control.ZoomControl", "control.FullscreenControl"]}>
                    <PlaceMap isActive={places[0]} clickHandler={clickPlace} latitude={45.038923} longitude={38.976095} id={1}/>
                    <PlaceMap isActive={places[1]} clickHandler={clickPlace} latitude={45.040929} longitude={38.975322} id={2}/>
                    <PlaceMap isActive={places[2]} clickHandler={clickPlace} latitude={45.045578} longitude={38.985428} id={3}/>
                    <PlaceMap isActive={places[3]} clickHandler={clickPlace} latitude={45.051532} longitude={38.969384} id={4}/>
                    <PlaceMap isActive={places[4]} clickHandler={clickPlace} latitude={45.040744} longitude={38.968665} id={5}/>
                    <PlaceMap isActive={places[5]} clickHandler={clickPlace} latitude={45.041317} longitude={38.963069} id={6}/>
                    <PlaceMap isActive={places[6]} clickHandler={clickPlace} latitude={45.045584} longitude={38.977298} id={7}/>
                    <PlaceMap isActive={places[7]} clickHandler={clickPlace} latitude={45.033203} longitude={38.972816} id={8}/>
                    <PlaceMap isActive={places[8]} clickHandler={clickPlace} latitude={45.032241} longitude={38.964533} id={9}/>
                    <PlaceMap isActive={places[9]} clickHandler={clickPlace} latitude={45.038445} longitude={38.953897} id={10}/>
            </Map>
            <div className={styles.OrderButton}>
                <a href="https://pay.web.money/d/tyyv"><Button style={{width: "100%", height: "40px"}} onClick={clickHandker}>Оформить заказ</Button></a>
            </div>
        </div>
    )
}

export default MakeOrder;