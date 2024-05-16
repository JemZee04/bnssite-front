import { AddToFavoritesButton } from "../../../components/AddToFavoritesButton";
import ProductCard from "../../../components/productCard/ProducrCard";
import { useGetCatalogPageQuery } from "../../../store/beekneesApi";
import styles from "./Catalog.module.css";

const Catalog: React.FC = () => {

    const { isLoading, data } = useGetCatalogPageQuery({
        limit: 50,
        offset: 0,
        sort: ''
    });

    return (
        <div className={styles.WrapPage}>
            <div className={styles.WrapListProduct}>
                <ProductCard item={{
                    id: undefined,
                    name: 'Футболка с логотипом',
                    shop: {
                        id: '1',
                        code: '123',
                        name: 'Guess',
                        logo_image: undefined
                    },
                    price: 1200,
                    colors: ['red', 'green'],
                    sizes: [{ id: '1', name: 'x' }, { id: '2', name: 'xs' }, { id: '3', name: 's' }],
                    images: undefined
                }} addToCartButton={<div> Не  люблю Данилу </div>} addToFavoriteButton={<AddToFavoritesButton item={{
                    id: undefined,
                    name: undefined,
                    shop: undefined,
                    price: undefined,
                    colors: undefined,
                    sizes: undefined,
                    images: undefined
                }} />} />
                {
                    isLoading
                        ? <p>Загрузка...</p>
                        : <>
                            {
                                data?.productList?.map((item, index) => {
                                    return <ProductCard
                                        key={index}
                                        item={item}
                                        addToCartButton={<div> Не  люблю Данилу </div>}
                                        addToFavoriteButton={<AddToFavoritesButton item={item} />}
                                    />
                                })
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default Catalog;