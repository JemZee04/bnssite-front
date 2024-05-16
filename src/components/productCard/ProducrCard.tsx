import { useNavigate } from "react-router-dom";
import { PRODUCT_PATH } from "../../shared/utils/constants";
import { ProductInList } from "../../store/beekneesApi";
import styles from "./ProductCard.module.css";
import NO_IMAGE from '../../assets/images/no_image.png';

type ProductCardProps = {
    item: ProductInList,
    addToCartButton: React.ReactElement,
    addToFavoriteButton: React.ReactElement
}

const ProductCard: React.FC<ProductCardProps> = ({ item, addToCartButton, addToFavoriteButton }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.DivCard}>
            <div className={styles.DivFavoriteButton}>
                {
                    addToFavoriteButton
                }
            </div>
            <img onClick={() => navigate(PRODUCT_PATH)} className={styles.ImageCard} src={item.images !== undefined ? item.images[0].filepath : NO_IMAGE} alt="image product" />
            <div className={styles.CardContent}>
                <div className={styles.CardMainInfo}>
                    <p className={styles.CardTitle}>{item.name}</p>
                    <p className={styles.CardTitle}>{item.price}</p>
                </div>
                <p className={styles.CardContent}>{item.shop?.name}</p>
            </div>
        </div>
    );
}

export default ProductCard;