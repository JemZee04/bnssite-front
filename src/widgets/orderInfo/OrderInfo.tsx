import { Button } from "antd";
import styles from "./OrderInfo.module.css";

type OrderInfoProps = {
    totalCount: number;
    deliveryCost: number;
    totalCost: number;
}

const OrderInfo: React.FC<OrderInfoProps> = ({totalCount, totalCost, deliveryCost}) => {
    return (
        <div className={styles.Div}>
            <p className={styles.Title}>Ваш заказ:</p>
            <div>
                <p className={styles.Content}>{`Кол-во товаров: ${totalCount} шт.`}</p>
                <p className={styles.Content}>{`Доставка: ${deliveryCost === 0 ? "бесплатно" : deliveryCost + " руб."}`}</p>
            </div>
            <p className={styles.Title}>{`Итого: ${totalCost} руб.`}</p>
        </div>
    )
}

export default OrderInfo;