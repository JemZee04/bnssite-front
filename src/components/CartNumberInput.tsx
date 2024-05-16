import { Button, Row, Space } from "antd"
import { ProductInList } from "../store/beekneesApi"
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { useAppDispatch, useAppSelector } from "../store/store"
import { addOneToCart, cartSelectors, deleteAllFromCart, deleteOneFromCart } from "../store/slices/cart"


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
            <Space direction='horizontal'>
                <Button shape='circle' icon={<MinusOutlined />} disabled={itemInCart.count == 1} onClick={onRemove} />
                <div style={{ fontSize: 26, fontWeight: 'bold' }}>{itemInCart.count}</div>
                <Button shape='circle' icon={<PlusOutlined />} onClick={onAdd} />
            </Space>
            <Button shape='circle' icon={<DeleteOutlined />} onClick={onClear} />
        </Row>

    )
}