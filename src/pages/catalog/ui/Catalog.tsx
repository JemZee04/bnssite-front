import { useParams, useSearchParams } from "react-router-dom";
import { AddToFavoritesButton } from "../../../components/AddToFavoritesButton";
import ProductCard from "../../../components/productCard/ProducrCard";
import { useGetCatalogPageQuery } from "../../../store/beekneesApi";
import styles from "./Catalog.module.css";
import { AddToCartButton } from "../../../components/AddToCartButton";

const Catalog: React.FC = () => {

    const [params, setSearchParams] = useSearchParams();


    const { isLoading, data } = useGetCatalogPageQuery({
        limit: 50,
        offset: 0,
        sort: '',

    });

    console.log(params.get('gender'));


    return (
        <div className={styles.WrapPage}>
            <div className={styles.WrapListProduct}>
                {
                    isLoading
                        ? <p>Загрузка...</p>
                        : <>
                            {
                                data?.productList?.map((item, index) => {
                                    return <ProductCard
                                        key={index}
                                        item={item}
                                        addToCartButton={<AddToCartButton item={item} />}
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