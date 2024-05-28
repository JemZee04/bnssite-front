import CheckOutlined from "@ant-design/icons";
import styles from "./OrderHeader.module.css";

type OrderHeaderProps = {
    id: string | number;
    statusName: string;
    dateOrder: Date;
    countItems: number;
    totalCost: number;
}

const OrderHeader: React.FC<OrderHeaderProps> = ({id, statusName, dateOrder, countItems, totalCost}) => {
    return(
        <div className={styles.HeaderDiv}>
            <div>
                <p>{`Заказ #${id} от ${dateOrder.toLocaleDateString()}`}</p>
                <p>{`${countItems} товаров на ${totalCost} ₽`}</p>
            </div>
            <div>
                {/* <CheckOutlined /> */}
                <p>{statusName}</p>
            </div>
        </div>
    )
}

export default OrderHeader;