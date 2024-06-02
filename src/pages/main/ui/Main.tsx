import React, { useEffect, useMemo } from "react";

import HOME_BACKGROUND from '../../../assets/images/home_background.png';
import { BrandCard } from "../../../widgets/brands/BrandCard";
import { Card, Col, Flex, List, Row, Space, Spin } from "antd";
import { useGetMainPageQuery } from "../../../store/beekneesApi";
import { createSearchParams, useNavigate } from "react-router-dom";
import ProductCard from "../../../components/productCard/ProducrCard";
import { AddToCartButton } from "../../../components/AddToCartButton";
import { AddToFavoritesButton } from "../../../components/AddToFavoritesButton";
import WOMAN_FILTER from '../../../assets/images/woman.png';
import MAN_FILTER from '../../../assets/images/man.png';
import styles from './Main.module.css';
import { CATALOG_PATH, CATEGORY_PATH } from "../../../shared/utils/constants";

const Main: React.FC = () => {

    const navigate = useNavigate();
    const { isLoading, data } = useGetMainPageQuery();

    const categories = useMemo(() => ['Футболки', 'Штаны', 'Обувь', 'Шапки'], [])

    const onTapMan = () => {
        navigate(`${CATALOG_PATH}?gender=man`);
    }

    const onTapWoman = () => {
        navigate(`${CATALOG_PATH}?gender=woman`);
    }

    console.log(data);
    

    return (isLoading ? <Spin /> :
        <>
            <Space size={20} direction='vertical' style={{ width: '100%' }}>
                <section style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${HOME_BACKGROUND})`,
                    gap: 50
                }}>
                    <img src={WOMAN_FILTER} onClick={onTapWoman} className={styles.MainCategoriesImage} />
                    <img src={MAN_FILTER} onClick={onTapMan} className={styles.MainCategoriesImage} />
                </section>
                <section className={styles.MainSection}>
                    <h2 className={styles.MainSectionTitle}>Популярные бренды</h2>
                </section>
                {data?.shopList && <section className={styles.MainSection}>
                    <List
                        grid={{ gutter: 8, column: 5 }}
                        loading={isLoading}
                        itemLayout='horizontal'
                        dataSource={data.shopList.slice(0, 5) ?? []}
                        renderItem={(item) => (
                            <List.Item id={item.id}>
                                <BrandCard
                                    image={item.logo_image?.filepath ?? ''}
                                    title={item.name ?? ''}
                                />
                            </List.Item>

                        )}
                    />
                </section>}
                <section className={styles.MainSection}>
                    <h2 className={styles.MainSectionTitle}>Категории</h2>
                    <List
                        grid={{ gutter: 8, column: 5 }}
                        itemLayout='horizontal'
                        dataSource={data?.headerMenu ?? []}
                        renderItem={(item) => (
                            // <List.Item>
                            <Card
                                hoverable
                                style={{
                                    maxHeight: 500,
                                    maxWidth: 220
                                }}
                                title={item.text}
                            />
                            // </List.Item>

                        )}
                    />
                </section>
                <section className={styles.MainSection}>
                    <h2 className={styles.MainSectionTitle}>Скидки</h2>
                    <List
                        dataSource={data?.saleProductList?.slice(0, 5) ?? []}
                        grid={{ gutter: 8, column: 5 }}
                        renderItem={(item, _) => (
                            <List.Item>
                                <ProductCard
                                    item={item}
                                    addToCartButton={<AddToCartButton item={item} />}
                                    addToFavoriteButton={<AddToFavoritesButton item={item} />} />
                            </List.Item>

                        )}
                    />
                </section>
                <section className={styles.MainSection}>
                    <h2 className={styles.MainSectionTitle}>Популярные товары</h2>
                    <List
                        dataSource={data?.popularProductList?.slice(0, 5) ?? []}
                        grid={{ gutter: 8, column: 5 }}
                        renderItem={(item, _) => (
                            <List.Item>
                                <ProductCard
                                    item={item}
                                    addToCartButton={<AddToCartButton item={item} />}
                                    addToFavoriteButton={<AddToFavoritesButton item={item} />} />
                            </List.Item>

                        )}
                    />
                </section>
            </Space>
        </>
    )
}

export default Main;