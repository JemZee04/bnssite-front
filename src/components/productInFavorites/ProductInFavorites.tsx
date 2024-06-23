import { Col, Image, Row, Space } from "antd";
import NO_IMAGE from '../../assets/images/no_image.png';
import { Link, useNavigate } from "react-router-dom";
import { ProductInFavorites } from "../../store/slices/favorites";
import { PRODUCT_PATH } from "../../shared/utils/constants";
import { AddToFavoritesButton } from "../AddToFavoritesButton";
import styles from "./ProductInFavorites.module.css";

type ProductCartItemProps = {
    item: ProductInFavorites
}

export const ProductFavoriteItemCard: React.FC<ProductCartItemProps> = ({ item }) => {

    const navigate = useNavigate();

    return (
        <Row gutter={[10, 0]}>
            <Col span={11} style={{ padding: 10 }}>
                <Image
                    style={{width: 268, height: 296, cursor: "pointer"}}
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
                        <h3 style={{fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 24, color: "#FFFFFF"}}>{item.name}</h3>
                    </Col>
                    <Col span={2}>
                        <AddToFavoritesButton item={item} />
                    </Col>
                </Row>
                {/* TODO вставить ссылку на бренд */}
                <Link to={''} style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 16,color: "#FFFFFF"}}>
                    {item.shop?.name}
                </Link>
                <div className={styles.WrapContent}>
                    <p className={styles.Content}>{item.sizes?.at(0)?.name ?? "Размер не выбран"}</p>
                    <div className={styles.Separator}></div>
                    <p className={styles.Content}>{item.colors?.at(0)?.name ?? "Цвет не выбран"}</p>
                </div>
                <p className={styles.Content} style={{fontWeight: 700, fontSize: "24px"}}>{`${item.price} ₽`}</p>
            </Col>
        </Row>
    );
}