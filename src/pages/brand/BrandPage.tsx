import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useGetShopPageByShopCodeQuery } from "../../store/beekneesApi";
import { Button, List } from "antd";
import { AddToCartButton } from "../../components/AddToCartButton";
import { AddToFavoritesButton } from "../../components/AddToFavoritesButton";
import ProductCard from "../../components/productCard/ProducrCard";
import RatingIcon from '../../assets/icons/rate.svg';
import MarkIcon from '../../assets/icons/mark.svg';
import { CATALOG_PATH } from "../../shared/utils/constants";

export const BrandPage: React.FC = () => {

    const brandPageParams = useParams();
    const navigate = useNavigate();

    const brandId = useMemo(() => brandPageParams['brandId'], [brandPageParams]);

    const { isLoading, data } = useGetShopPageByShopCodeQuery({ "shop-code": brandId ?? '' });


    const onGoToCatalogClick = () => {
        navigate(`${CATALOG_PATH}?brands=${brandId}`);
    }

    return isLoading
        ? <div>Загрузка</div>
        : <section>
            <div style={{
                backgroundImage: `url(${data?.shop?.mainImage?.filepath ?? ''})`,
                height: 700,
                width: '100%'
            }}
            ></div>
            <div style={{
                padding: 60,
                display: 'flex',
                flexDirection: 'column',
                gap: 10
            }}>
                <div style={{
                    flexGrow: 2
                }}>
                    {/* Место для картинок */}
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start'
                }}>
                    {
                        data?.shop?.rating && <div>
                            <RatingIcon />
                            <div>{`Средняя оценка товаров ${data?.shop?.rating}`}</div>
                        </div>
                    }
                    <p>{`Количсетво отзывов ${data?.shop?.quantityReviews ?? 0}`}</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start'
                    }}>
                        <MarkIcon />
                        <div>{`На платформе с ${new Date(data?.shop?.createdDate ?? '').getFullYear()}`}</div>
                    </div>
                    <p>{`Успешных заказов на платформе ${data?.shop?.orderQuantity ?? 0}`}</p>
                    {data?.shop?.description && <div>{data?.shop?.description}</div>}
                    <Button onClick={onGoToCatalogClick}>
                        Перейти в каталог
                    </Button>
                </div>
            </div>
            <div>
                <h1>Популярыне товары</h1>
                <List
                    dataSource={data?.popularProductOfShopList ?? []}
                    grid={{ gutter: 8 }}
                    renderItem={(item, _) => (
                        <List.Item>
                            <ProductCard
                                item={item}
                                addToCartButton={<AddToCartButton item={item} />}
                                addToFavoriteButton={<AddToFavoritesButton item={item} />} />
                        </List.Item>

                    )}
                />
            </div>
        </section>

}