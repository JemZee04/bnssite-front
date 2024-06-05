import { Card, ConfigProvider } from "antd";
import styles from "./BrandCard.module.css";

type BrandCardProps = {
    image: string,
    title: string,
    loading?: boolean
}

export const BrandCard: React.FC<BrandCardProps> = ({
    image,
    loading,
    title
}) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    padding: 0,
                    paddingLG: 0,
                    borderRadiusLG: 20,
                    borderRadius: 20,
                    colorBgContainer: "#BDFF2E"
                },
            }}
        >

            <Card
                loading={loading}
                hoverable

                style={{
                    maxWidth: 500,
                    maxHeight: 220,
                    padding: 0
                }}
            // cover = {<img src={image} alt="Brand logo"></img>}
            >
                <div
                    className={styles.DivCard}
                    style={{
                        maxWidth: 500,
                        maxHeight: 220,
                        textAlign: 'center',
                        fontSize: '52px'

                    }}>{title}</div>
            </Card>
        </ConfigProvider>
    )
}