import { useParams, useSearchParams } from "react-router-dom";
import { AddToFavoritesButton } from "../../../components/AddToFavoritesButton";
import ProductCard from "../../../components/productCard/ProducrCard";
import {  useGetCatalogPageQuery } from "../../../store/beekneesApi";
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
        colors: params.get('colors')?.split('%'),
        sizes: params.get('sizes')?.split('%'),
        shops: params.get('brands')?.split('%')
        
    });

    const selectedFilters = useMemo<SelectedFiltersTypes>(() => ({
        sizes: params.get('sizes')?.split('%'),
        categories: params.get('category') ?? undefined,
        colors: params.get('colors')?.split('%'),
        brands: params.get('brands')?.split('%')
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
                const prevParam = prev.get(name);
                if (prevParam) tempPrev.set(name, `${prevParam}%${value}`);
                else tempPrev.set(name, value);
                return tempPrev;
            });
                break;
            case 'delete':
                const currParams = params.get(name);
                if (!currParams || currParams?.split('%').length == 1) params.delete(name);
                else params.set(name, currParams.split('%').filter(v => v != value).join('%'));
                setSearchParams(params);
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