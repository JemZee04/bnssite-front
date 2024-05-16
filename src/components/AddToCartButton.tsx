import { useMemo, useState } from "react";
import { ProductInList } from "../store/beekneesApi";
import { useAppDispatch, useAppSelector } from "../store/store";
import { isFavoriteSelector } from "../store/slices/favorites";
import { Button, Modal, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CART_PATH } from "../shared/utils/constants";
import { addOneToCart, isInCartSelector } from "../store/slices/cart";
import { Size } from "../@types/types";
import { SelectSizeCard } from "./SelectSizeCard";

type AddToCartButtonProps = {
    item: ProductInList
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ item }) => {

    const [messageApi, contextHolder] = message.useMessage();
    const [isOpenSelectSize, setOpenSelectSize] = useState(false);

    const dispatch = useAppDispatch();

    const isInCart = useAppSelector(state => isInCartSelector(state, item));

    const addToCart = (item: ProductInList) => {
        dispatch(addOneToCart(item));
        messageApi.success('Товар добавлен в корзину', 3);
    }

    const onSelectSize = (size: Size) => {
        addToCart({ ...item, sizes: [size] });
        setOpenSelectSize(false);
    }

    const onAddToCart = () => {
        if (!item.sizes?.length || item.sizes.length == 1) addToCart(item);
        else setOpenSelectSize(true);
    }

    return <>
        {isInCart
            ? <Link to={CART_PATH} state={{ previousLocation: location }}>
                <Button icon={<ShoppingCartOutlined />}> В корзину </Button >
            </Link>
            : <Button icon={<ShoppingCartOutlined />} onClick={onAddToCart}>
                Добавить в корзину
            </Button >
        }
        {contextHolder}
        <Modal open={isOpenSelectSize} onCancel={() => setOpenSelectSize(false)} footer={null}>
            <SelectSizeCard sizes={item.sizes ?? []} onSelect={onSelectSize} />
        </Modal>
    </>
}