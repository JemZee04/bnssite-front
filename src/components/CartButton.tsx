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
        <Link style={{width:"100%", margin: 0, height: "32px"}} to={CART_PATH} state={{ previousLocation: location }}>
            <Badge count={cartTotal}>
                <Button
                    style={{width: "100%"}}
                    iconPosition='end'
                    icon={<ShoppingCartOutlined />}>
                    Корзина
                </Button>
            </Badge>

        </Link>

    );
}