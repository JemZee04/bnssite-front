import { List } from "antd";
import { ProductFavoriteItemCard } from "../../../components/productInFavorites/ProductInFavorites";
import { Numerals } from "../../../shared/utils/Numerals";
import { favoritesSelectors } from "../../../store/slices/favorites";
import { useAppSelector } from "../../../store/store";
import styles from "./Favourites.module.css";

const Favourites: React.FC = () => {


    const productsFavorite = useAppSelector(favoritesSelectors.selectAll);

    return (

        <div style={{
            maxHeight: '750px',
            overflowY: 'hidden',
            overflowX: 'hidden'
        }}>
            <h1 className={styles.Title}>Избранное</h1>
            <div className={styles.Content} style={{ marginBottom: 20 }}>{`${productsFavorite.length} ${Numerals.numeralsProducts(productsFavorite.length)}`.toUpperCase()}</div>
            <div className={styles.WrapList}>
                <List
                    itemLayout='vertical'
                    style={{ width: '100%', height: '100%' }}
                    dataSource={productsFavorite}
                    renderItem={(item, _) => (
                        <List.Item>
                            <ProductFavoriteItemCard item={item} />
                        </List.Item>

                    )}
                />
            </div>
        </div >

    )
}

export default Favourites;