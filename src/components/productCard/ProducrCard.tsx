import { ProductInList } from "../../store/beekneesApi";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
    item: ProductInList,
    addToCartButton: React.ReactElement,
    addToFavoriteButton: React.ReactElement
}

const ProductCard: React.FC<ProductCardProps> = ({item, addToCartButton, addToFavoriteButton}) => {
    return(
        <div className={styles.DivCard}>
            <div className={styles.DivFavoriteButton}>
                {
                    addToFavoriteButton
                }
            </div>
            <img className={styles.ImageCard} src={item.images !== undefined ? item.images[0].filepath : ""} alt="image product"/>
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