import { Button, ConfigProvider, List, Modal } from "antd";
import { cartSelectors } from "../../../store/slices/cart";
import { useAppSelector } from "../../../store/store";
import { ProductCartItemCard } from "../../../components/productCartItemCard/ProductCartItemCard";
import { useMemo, useState } from "react";
import OrderInfo from "../../../widgets/orderInfo/OrderInfo";
import styles from "./Cart.module.css";
import MakeOrder from "../../../widgets/makeOrder/MakeOrder";
import { Numerals } from "../../../shared/utils/Numerals";

const Cart: React.FC = () => {
    const  [isOpen, setIsOpen] = useState<boolean>(false);

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
        <div
            className={styles.CardWrap}
            style={{
            maxHeight: '850px',
            overflowY: 'hidden',
            overflowX: 'hidden',
            backgroundColor: "#5E6375",
            borderRadius: "20px"
        }}>
            <h1 className={styles.Title}>Корзина</h1>
            <div className={styles.Content}>{`${totalCount} ${Numerals.numeralsProducts(totalCount)}`.toUpperCase()}</div>
            <div className={styles.ListWrap}>
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
            </div>
            <OrderInfo totalCount={totalCount} deliveryCost={0} totalCost={totalCost} />
            <div className={styles.DivButton}>
                <Button onClick={() => setIsOpen(true)} size={"large"}>Оформить заказ</Button>
            </div>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: "Source Sans 3",
                        borderRadiusLG: 20,
                        borderRadiusSM: 20,
                        colorPrimaryBorder: "#BDFF2E",
                        lineWidth: 4,
                        lineType: "solid"
                    },
                    components: {
                        Modal: {
                            headerBg: "#5E6375",
                            lineWidth: 4,
                            lineType: "solid",
                            colorPrimaryBorder: "#BDFF2E"
                        },
                    },
                }}
            >
                <Modal open={isOpen} onCancel={() => setIsOpen(false)} footer={[]}>
                    <MakeOrder totalCount={totalCount} deliveryCost={0} totalCost={totalCost}/>
                </Modal>
            </ConfigProvider>
        </div>

    )
}

export default Cart;