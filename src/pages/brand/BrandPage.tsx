import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, List } from "antd";
import { AddToCartButton } from "../../components/AddToCartButton";
import { AddToFavoritesButton } from "../../components/AddToFavoritesButton";
import ProductCard from "../../components/productCard/ProducrCard";
import RatingIcon from '../../assets/icons/rate.svg';
import MarkIcon from '../../assets/icons/mark.svg';
import { CATALOG_PATH } from "../../shared/utils/constants";
import { useGetShopPageByShopIdQuery } from "../../store/beekneesApi";
import ShopPreview from "../../assets/images/shop_preview.png";

export const BrandPage: React.FC = () => {

    const brandPageParams = useParams();
    const navigate = useNavigate();

    const brandId = useMemo(() => brandPageParams['brandId'], [brandPageParams]);

    const { isLoading, data } = useGetShopPageByShopIdQuery({ "shop-id": brandId ?? '' });


    const onGoToCatalogClick = () => {
        navigate(`${CATALOG_PATH}?brands=${brandId}`);
    }

    return isLoading
        ? <div>Загрузка</div>
        : <section style={{backgroundColor: "#2E3345"}}>
            <div style={{
                backgroundImage: `url(${data?.shop?.mainImage?.filepath ?? ShopPreview})`,
                height: 700,
                width: '100%',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <h2 style={{fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 40, color: "#FFFFFF", border: "3px solid #BDFF2E", backgroundColor: "#000000", padding: "25px 70px", borderRadius: 20}}>{data?.shop?.name}</h2>
            </div>
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
                    <div style={{display: "flex", gap: 15, alignItems: "center"}}>
                        <img src={RatingIcon} alt="rating"/>
                        <p style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 26, color: "#FFFFFF"}}>{`${data?.shop?.rating} средняя оценка товаров`}</p>
                    </div>
                    <p style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 22, color: "#C7C7C7", padding: "0 45px"}}>{`${data?.shop?.quantityReviews ?? 0} отзывов`}</p>
                    <div style={{display: "flex", gap: 15, alignItems: "center"}}>
                        <img src={MarkIcon} alt="mark"/>
                        <p style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 26, color: "#FFFFFF"}}>{`На платформе с ${new Date(data?.shop?.createdDate ?? '').getFullYear()}`}</p>
                    </div>
                    <p style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 22, color: "#C7C7C7", padding: "0 45px"}}>{`${data?.shop?.orderQuantity ?? 0} успешных заказов на платформе `}</p>
                    {data?.shop?.description && <div style={{padding: "15px 0", fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 24, color: "#FFFFFF" }}>{data?.shop?.description}</div>}
                    <div style={{width: "25%", display: "flex", justifyContent: "center"}}>
                    <Button onClick={onGoToCatalogClick}>
                        Перейти в каталог
                    </Button>
                    </div>
                </div>
            </div>
            <div style={{padding: "20px 60px"}}>
                <h1 style={{fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 40, color: "#FFFFFF"}}>{"Популярные товары".toLocaleUpperCase()}</h1>
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