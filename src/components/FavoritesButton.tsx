import { Link, useLocation } from "react-router-dom"
import { FAVOURITES_PATH } from "../shared/utils/constants"
import { useAppSelector } from "../store/store";
import { favoritesSelectors } from "../store/slices/favorites";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";

export const FavoritesButton: React.FC = () => {

    const location = useLocation();
    const favoritesTotal = useAppSelector(favoritesSelectors.selectTotal);

    return (
        <Link to={FAVOURITES_PATH} state={{ previousLocation: location }}>
            <Badge count={favoritesTotal}>
                <Button
                    iconPosition='end'
                    icon={<ShoppingCartOutlined />}>
                    Избранное
                </Button>
            </Badge>
        </Link>
    )
}