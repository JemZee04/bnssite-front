import React, { useEffect, useMemo } from "react";

import HOME_BACKGROUND from '../../../assets/images/home_background.png';
import { BrandCard } from "../../../widgets/brands/BrandCard";
import { Card, Col, List, Row, Space, Spin } from "antd";
import { useGetMainPageQuery } from "../../../store/beekneesApi";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {

    const navigate = useNavigate();
    const { isLoading, data } = useGetMainPageQuery();

    // useEffect(() => {
    //     fetch(`http://localhost:7070/api/v1/bns/fixtures/run`, { method: 'POST' })
    //         .then(res => console.log(res))
    // }, [])

    const categories = useMemo(() => ['Футболки', 'Штаны', 'Обувь', 'Шапки'], [])

    return (
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
                    <div>Мужчинами</div>
                    <div>Женщинам</div>
                </section>
                {data?.shopList && <section style={{ overflowX: 'scroll' }}>
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
                <section style={{ overflowX: 'scroll' }}>
                    <h2>Категории</h2>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        itemLayout='horizontal'
                        dataSource={data?.headerMenu}
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
                <section style={{ overflowX: 'scroll' }}>
                    <h2>Скидки</h2>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        itemLayout='horizontal'
                        dataSource={categories}
                        renderItem={(item) => (
                            // <List.Item>
                            <Card
                                hoverable
                                style={{
                                    maxHeight: 500,
                                    maxWidth: 220
                                }}
                                title={item}
                            />
                            // </List.Item>
                        )}
                    />
                </section>

            </Space>
            <section style={{ overflowX: 'scroll' }}>
                <h2>Популярные товары</h2>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    itemLayout='horizontal'
                    dataSource={categories}
                    renderItem={(item) => (
                        // <List.Item>
                        <Card
                            hoverable
                            onClick={() => navigate('')}
                            style={{
                                maxHeight: 500,
                                maxWidth: 220
                            }}
                            title={item}
                        />
                        // </List.Item>
                    )}
                />
            </section>
        </>
    )
}

export default Main;