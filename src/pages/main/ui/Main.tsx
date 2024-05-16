import React, { useEffect, useMemo } from "react";

import HOME_BACKGROUND from '../../../assets/images/home_background.png';
import { BrandCard } from "../../../widgets/brands/BrandCard";
import { Card, Col, Flex, List, Row, Space, Spin } from "antd";
import { useGetMainPageQuery } from "../../../store/beekneesApi";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../components/productCard/ProducrCard";
import { AddToCartButton } from "../../../components/AddToCartButton";
import { AddToFavoritesButton } from "../../../components/AddToFavoritesButton";
import WOMAN_FILTER from '../../../assets/images/woman.png';
import MAN_FILTER from '../../../assets/images/man.png';
import styles from './Main.module.css';

const Main: React.FC = () => {

    const navigate = useNavigate();
    const { isLoading, data } = useGetMainPageQuery();

    const categories = useMemo(() => ['Футболки', 'Штаны', 'Обувь', 'Шапки'], [])

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
                    <img src={WOMAN_FILTER}  className={styles.MainCategoriesImage} />
                    <img src={MAN_FILTER}   className={styles.MainCategoriesImage}/>

                </section>
                {data?.shopList && <section className={styles.MainSection}>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        loading={isLoading}
                        itemLayout='horizontal'
                        dataSource={data.shopList}
                        renderItem={(item) => (
                            <List.Item id={item.id}>
                                <BrandCard image={item.logo_image?.filepath ?? ''} loading></BrandCard>
                            </List.Item>

                        )}
                    />
                </section>}
                <section className={styles.MainSection}>
                    <h2 className={styles.MainSectionTitle}>Категории</h2>
                    <List
                        grid={{ gutter: 16, column: 4 }}
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
                        dataSource={data?.saleProductList?.slice(0, 4) ?? []}
                        grid={{ gutter: 16, column: 4 }}
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
                        dataSource={data?.popularProductList?.slice(0, 4) ?? []}
                        grid={{ gutter: 16, column: 4 }}
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