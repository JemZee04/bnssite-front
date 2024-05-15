import React from "react";

import HOME_BACKGROUND from '../../../assets/images/home_background.png';
import { BrandCard } from "../../../widgets/brands/BrandCard";
import { Card, List, Space } from "antd";

const Main: React.FC = () => {

    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
    ];

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
                <section style={{ overflowX: 'scroll' }}>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        itemLayout='horizontal'
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <BrandCard></BrandCard>
                            </List.Item>

                        )}
                    />
                </section>
                <section style={{ overflowX: 'scroll' }}>
                    <h2>Категории</h2>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        itemLayout='horizontal'
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Card title = ''></Card>
                            </List.Item>

                        )}
                    />
                </section>
            </Space>

        </>
    )
}

export default Main;