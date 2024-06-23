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
import CategoryCard from "../../../components/categoryCard/CategoryCard";
import Star from "../../../assets/icons/star1.svg";

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
            <Space size={20} direction='vertical' style={{ width: '100%', backgroundColor: "#2E3345" }}>
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
                {data?.shopList && <section style={{position: "relative"}} className={styles.MainSection}>
                    <div style={{zIndex: 100, position: "relative"}}>
                        <List
                            grid={{ gutter: 8, column: 5 }}
                            loading={isLoading}
                            itemLayout='horizontal'
                            dataSource={data.shopList.slice(0, 5) ?? []}
                            renderItem={(item) => (
                                <List.Item id={item.id}>
                                    <BrandCard
                                        id={item.id ?? ''}
                                        image={item.logo_image?.filepath ?? ''}
                                        title={item.name ?? ''}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div style={{position: "absolute", width: "100%", top: "20px", height: "80px", boxShadow: " 0 0 60px #7122FB", backgroundColor: "#7122fb83"}}></div>
                </section>}
                <section className={styles.MainSection} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <h2 className={styles.MainSectionTitle}>Категории</h2>
                    <div style={{display: "flex", gap: 10}}>
                        {
                            data?.categories?.map((item, index) => {
                                return <CategoryCard key={index} item={item}/>
                            })
                        }
                    </div>
                    {/* <List
                        grid={{ gutter: 8, column: 4 }}
                        itemLayout='horizontal'
                        dataSource={data?.categories ?? []}
                        renderItem={(item) => (
                            // <List.Item>
                            <CategoryCard item={item}/>
                            // </List.Item>

                        )}
                    /> */}
                </section>
                <div className={styles.marquee}>
                    <span><img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE <img src={Star} alt="star"/> HIT SALE</span>
                </div>
                <section className={styles.MainSection} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
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
                <section className={styles.MainSection} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
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

                <section id={styles.BlockUs}>
                    <h2 className={styles.MainSectionTitle}>О нас</h2>
                    <text className={styles.Text}>
                        Bee Knees - это уникальный мультибрендовый онлайн магазин, который приглашает вас погрузиться в мир изысканной моды с неизведанными брендами. Мы являемся оазисом для ценителей стиля, которые ищут что-то особенное, эксклюзивное и неповторимое. В нашем ассортименте вы обнаружите малоизвестные, но замечательные бренды, отражающие яркие тенденции и уникальные решения в мире моды.
                        Bee Knees предлагает эксклюзивные находки для тех, кто стремится к самовыражению через одежду. Мы тщательно подбираем коллекции, чтобы предоставить вам возможность выделиться из толпы, подчеркнуть свою индивидуальность и создать неповторимый образ. У нас вы найдете не просто одежду, а источник вдохновения и возможность раскрыть свой уникальный стиль.
                        Присоединяйтесь к Bee Knees и станьте частью сообщества тех, кто ценит креативность, инновации и утонченный вкус в мире моды. Позвольте себе погрузиться в увлекательное путешествие по удивительным мирам малоизвестных брендов вместе с нами. Вас ждут неожиданные открытия, стильные находки и возможность преобразить свой гардероб с помощью уникальных предметов одежды от Bee Knees.
                    </text>
                </section>
            </Space>
        </>
    )
}

export default Main;