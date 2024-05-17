import { Col, Image, Row, Space } from "antd";
import { ProductInCart } from "../store/slices/cart/types"
import NO_IMAGE from '../assets/images/no_image.png';
import { AddToFavoritesButton } from "./AddToFavoritesButton";
import { Link, useNavigate } from "react-router-dom";
import { CartNumberInput } from "./CartNumberInput";
import { PRODUCT_PATH } from "../shared/utils/constants";

type ProductCartItemProps = {
    item: ProductInCart
}

export const ProductCartItemCard: React.FC<ProductCartItemProps> = ({ item }) => {

    const navigate = useNavigate();

    return (
        <Row gutter={[10, 0]}>
            <Col span={12} style={{ padding: 10 }}>
                <Image
                    onClick={() => navigate(`${PRODUCT_PATH}/${item.id}`)}
                    preview={false}
                    alt={item.images?.at(0)?.alt ?? 'Фото товара'}
                    src={item.images?.at(0)?.filepath ?? NO_IMAGE}
                    fallback={NO_IMAGE}
                />
            </Col>
            <Col span={12} style={{ padding: 10 }}>
                {/* <Space direction='vertical' size={10}> */}
                <Row>
                    <Col flex='auto'>
                        <h3>{item.name}</h3>
                    </Col>
                    <Col span={2}>
                        <AddToFavoritesButton item={item} />
                    </Col>
                </Row>
                {/* TODO вставить ссылку на бренд */}
                <Link to={''} >
                    {item.shop?.name}
                </Link>
                <div>{item.sizes?.at(0)?.name}</div>
                <div>{item.price}</div>
                <CartNumberInput item={item} />
                {/* </Space> */}
            </Col>
        </Row>
    );
}