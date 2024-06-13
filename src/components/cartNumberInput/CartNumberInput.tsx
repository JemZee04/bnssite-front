import { Button, Row, Space } from "antd"
import { ProductInList } from "../../store/beekneesApi"
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { addOneToCart, cartSelectors, deleteAllFromCart, deleteOneFromCart } from "../../store/slices/cart"
import styles from "./CartNumberInput.module.css";


type CartNumberInputProps = {
    item: ProductInList,
}

export const CartNumberInput: React.FC<CartNumberInputProps> = ({ item }) => {

    const itemInCart = useAppSelector(state => cartSelectors.selectById(state, item.id ?? ''));

    const dispatch = useAppDispatch();

    const onRemove = () => dispatch(deleteOneFromCart(itemInCart));
    const onAdd = () => dispatch(addOneToCart(item));
    const onClear = () => dispatch(deleteAllFromCart());

    return (
        <Row justify='space-between' style={{width: '100%'}}>
            <div className={styles.WrapCounter}>
                <Button shape='circle' icon={<MinusOutlined />} disabled={itemInCart.count == 1} onClick={onRemove} />
                <p style={{ fontSize: "20px", fontWeight: '500', fontFamily:  "Source Sans 3"}}>{itemInCart.count}</p>
                <Button shape='circle' icon={<PlusOutlined />} onClick={onAdd} />
            </div>
            <Button shape='circle' icon={<DeleteOutlined />} onClick={onClear} />
        </Row>

    )
}