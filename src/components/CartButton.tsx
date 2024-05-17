import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { CART_PATH } from "../shared/utils/constants";
import { useAppSelector } from "../store/store";
import { cartSelectors, selectTotalCount } from "../store/slices/cart";

export const CartButton: React.FC = () => {

    const location = useLocation();
    const cartTotal = useAppSelector(selectTotalCount);

    return (
        <Link to={CART_PATH} state={{ previousLocation: location }}>
            <Badge count={cartTotal}>
                <Button
                    iconPosition='end'
                    icon={<ShoppingCartOutlined />}>
                    Корзина
                </Button>
            </Badge>

        </Link>

    );
}