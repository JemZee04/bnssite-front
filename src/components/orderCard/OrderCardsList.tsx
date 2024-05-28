import { Steps } from "antd";
import { ProductInOrder } from "../../store/beekneesApi";
import CardOrder from "./OrderCard";

type OrderCardListProps = {
    status: string;
    productItems: ProductInOrder[];
}

const OrderCardList: React.FC<OrderCardListProps> = ({status, productItems}) => {
    return(
        <div>
            <>
                {
                    productItems.map((item, index) => {
                        return <CardOrder item={{
                            id: String(index),
                            name: item.name,
                            shop: item.shop,
                            price: item.price,
                            colors: item.colors,
                            sizes: item.sizes,
                            images: item.images?.filepath
                        }} count={item.quantity ?? -1}/>
                    })
                }
            </>
        <Steps
            direction="vertical"
            items={[
            {
                title: 'Заказ оформлен',
                status: status === "Заказ оформлен" 
                    ? "process" 
                    : 'finish'
            },
            {
                title: 'Заказ собран',
                status: status === "Заказ собран"
                    ? "process"
                    : status === "Заказ оформлен"
                        ? "wait" 
                        : "finish",
            },
            {
                title: 'В пути',
                status: status === "В пути" 
                    ? "process"
                    : (status === "Заказ оформлен" || status === "Заказ собран")
                        ? "wait"
                        : "finish"
            },
            {
                title: 'Ожидает в пункте выдачи',
                status: status === "Ожидает в пункте выдачи"
                    ? "process"
                    : status === "Заказ выдан"
                        ? "finish"
                        : 'wait'
            },
            {
                title: 'Заказ выдан',
                status: status === "Заказ выдан"
                    ? "finish"
                    : "wait"
            }
            ]}
        />
      </div>
    )
}

export default OrderCardList;