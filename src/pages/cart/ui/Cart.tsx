import { List } from "antd";
import { cartSelectors } from "../../../store/slices/cart";
import { useAppSelector } from "../../../store/store";
import { ProductCartItemCard } from "../../../components/ProductCartItemCard";
import { useMemo } from "react";

const Cart: React.FC = () => {

    const products = useAppSelector(cartSelectors.selectAll);

    const totalCount = useMemo(
        () => products.map(p => p.count).reduce((prev, curr) => prev + curr, 0),
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
        </div>

    )
}

export default Cart;