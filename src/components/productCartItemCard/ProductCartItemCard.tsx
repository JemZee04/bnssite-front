import { Col, Image, Row, Space } from "antd";
import { ProductInCart } from "../../store/slices/cart/types"
import NO_IMAGE from '../../assets/images/no_image.png';
import { AddToFavoritesButton } from "../AddToFavoritesButton";
import { Link, useNavigate } from "react-router-dom";
import { CartNumberInput } from "../cartNumberInput/CartNumberInput";
import { PRODUCT_PATH } from "../../shared/utils/constants";
import styles from "./ProductCartItemCard.module.css";

type ProductCartItemProps = {
    item: ProductInCart
}

export const ProductCartItemCard: React.FC<ProductCartItemProps> = ({ item }) => {

    const navigate = useNavigate();
    console.log(item.sizes);
    console.log(item.colors);

    return (
        <Row gutter={[0, 0]}>
            <Image
                width="268px"
                height="296px"
                onClick={() => navigate(`${PRODUCT_PATH}/${item.id}`)}
                preview={false}
                alt={item.images?.at(0)?.alt ?? 'Фото товара'}
                src={item.images?.at(0)?.filepath ?? NO_IMAGE}
                fallback={NO_IMAGE}
            />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px"}}>
                <div>
                <Row>
                    <Col flex='auto'>
                        <h3 className={styles.Title}>{item.name}</h3>
                    </Col>
                    <Col span={2}>
                        <AddToFavoritesButton item={item} />
                    </Col>
                </Row>
                <Link to={''} className={styles.LinkShop}>
                    {item.shop?.name}
                </Link>
                </div>
                {/* <p>{item.sizes?.toString() ?? "нет размера"}</p> */}
                <div className={styles.WrapContent}>
                    <p className={styles.Content}>{item.sizes?.at(0)?.name ?? "Размер не выбран"}</p>
                    <div className={styles.Separator}></div>
                    <p className={styles.Content}>{item.colors?.at(0)?.name ?? "Цвет не выбран"}</p>
                </div>
                <p className={styles.Content} style={{fontWeight: 700, fontSize: "24px"}}>{`${item.price} ₽`}</p>
                <CartNumberInput item={item} />
            </div>
        </Row>
    );
}