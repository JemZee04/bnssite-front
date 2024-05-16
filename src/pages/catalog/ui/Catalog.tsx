import { FavoritesButton } from "../../../components/FavoritesButton";
import ProductCard from "../../../components/productCard/ProducrCard";
import { useGetCatalogPageQuery } from "../../../store/beekneesApi";

const Catalog: React.FC = () => {
    
    const {isLoading, data} = useGetCatalogPageQuery({
        limit: 50,
        offset: 0,
        sort: ''
    });

    return(
        <div>
            <h1>Каталог</h1>
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
                sizes: [{id: '1', name: 'x'}, {id: '2', name: 'xs'}, {id: '3', name: 's'}],
                images: undefined
            }} addToCartButton={<div> Не  люблю Данилу </div>} addToFavoriteButton={<FavoritesButton/>}/>
            {
                isLoading
                ? <p>Загрузка...</p>
                :   <>
                    {
                        data?.productList?.map((item, index) => {
                            return <ProductCard key={index} item={item} addToCartButton={<div> Не  люблю Данилу </div>} addToFavoriteButton={<FavoritesButton/>}/>
                        })
                    }
                </>
            }
        </div>
    )
}

export default Catalog;