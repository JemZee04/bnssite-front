import { useParams, useSearchParams } from "react-router-dom";
import { AddToFavoritesButton } from "../../../components/AddToFavoritesButton";
import ProductCard from "../../../components/productCard/ProducrCard";
import { FiltersAndSorting, useGetCatalogPageQuery } from "../../../store/beekneesApi";
import styles from "./Catalog.module.css";
import { AddToCartButton } from "../../../components/AddToCartButton";
import { CatalogFilter } from "./CatalogFilter";
import { useMemo } from "react";

export type FilterType = 'add' | 'delete' | 'set';

export type SelectedFiltersTypes = {
    categories?: string,
    colors?: string[],
    sizes?: string[],
    brands?: string[]
}

const Catalog: React.FC = () => {

    const [params, setSearchParams] = useSearchParams();

    const { isLoading, data } = useGetCatalogPageQuery({
        limit: 50,
        offset: 0,
        sort: '',
        gender: params.get('gender') ?? undefined,
        categories: params.getAll('category'),
        colors: params.getAll('colors'),
        sizes: params.getAll('sizes')
    });

    const selectedFilters = useMemo<SelectedFiltersTypes>(() => ({
        sizes: params.getAll('sizes'),
        categories: params.get('category') ?? undefined,
        colors: params.getAll('colors'),
        brands: params.getAll('brands')
    }), [params])

    const onSelectFilter = (filters: [string, string], type: FilterType) => {
        const name = filters[0];
        const value = filters[1];
        switch (type) {
            case 'set': setSearchParams(prev => {
                const tempPrev = prev;
                tempPrev.set(name, value);
                return tempPrev;
            });
                break;
            case 'add': setSearchParams(prev => {
                const tempPrev = prev;
                tempPrev.append(name, value);
                return tempPrev;
            });
                break;
            case 'delete': setSearchParams(prev => {
                const tempPrev = prev;
                const uParams = prev.getAll(name).filter(v => v != value);

                console.log('U PARAMS', uParams);
            
                tempPrev.delete(name);
                console.log('TEMP NAME = ', tempPrev.getAll(name) );
                
                for (const uParam of uParams) tempPrev.append(name, uParam);
                return tempPrev;
            });
                break;
        }
    }

    return (
        isLoading
            ? <p>Загрузка...</p>
            : <>
                <div>
                    <CatalogFilter filters={data?.filters ?? null} onSelectFilter={onSelectFilter} selectedFilters={selectedFilters} />
                </div>
                <div className={styles.WrapPage}>
                    <div className={styles.WrapListProduct}>
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


                    </div>
                </div>
            </>

    )
}

export default Catalog;