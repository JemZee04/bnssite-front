import { Button, ConfigProvider, List } from "antd";
import { cartSelectors } from "../../../store/slices/cart";
import { useAppSelector } from "../../../store/store";
import { ProductCartItemCard } from "../../../components/ProductCartItemCard";
import { useMemo } from "react";
import OrderInfo from "../../../widgets/orderInfo/OrderInfo";
import styles from "./Cart.module.css";

const Cart: React.FC = () => {

    const products = useAppSelector(cartSelectors.selectAll);

    const totalCount = useMemo(
        () => products.map(p => p.count).reduce((prev, curr) => prev + curr, 0),
        [products]
    )

    const totalCost = useMemo(
        () => products.map(p => p.count * (p.price ?? 0)).reduce((prev, curr) => prev + curr, 0),
        [products]
    )

    return (
        <div style={{
            maxHeight: '850px',
            overflowY: 'scroll',
            overflowX: 'hidden'
        }}>
            <h1>Корзина</h1>
            <div style={{ marginBottom: 20 }}>{`${totalCount} товаров`}</div>

            <List
                itemLayout='vertical'
                style={{ width: '100%', height: '100%' }}
                dataSource={products}
                renderItem={(item, _) => (
                    <List.Item>
                        <ProductCartItemCard item={item} />
                    </List.Item>

                )}
            />

            <OrderInfo totalCount={totalCount} deliveryCost={0} totalCost={totalCost} />
            <div className={styles.DivButton}>
                <Button size={"large"}>Оформить заказ</Button>
            </div>
        </div>

    )
}

export default Cart;