import { List } from "antd";
import { ProductFavoriteItemCard } from "../../../components/productInFavorites/ProductInFavorites";
import { favoritesSelectors } from "../../../store/slices/favorites";
import { useAppSelector } from "../../../store/store";

const Favourites: React.FC = () => {


    const productsFavorite = useAppSelector(favoritesSelectors.selectAll);

    return (

        <div style={{
            maxHeight: '850px',
            overflowY: 'scroll',
            overflowX: 'hidden'
        }}>
            <h1>Корзина</h1>
            <div style={{ marginBottom: 20 }}>{`${productsFavorite.length} товаров`}</div>

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
        </div >

    )
}

export default Favourites;