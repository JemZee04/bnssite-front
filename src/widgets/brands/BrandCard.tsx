import { Card, ConfigProvider } from "antd";
import styles from "./BrandCard.module.css";
import { useNavigate } from "react-router-dom";
import { BRAND_PATH } from "../../shared/utils/constants";

type BrandCardProps = {
    id: string,
    image: string,
    title: string,
    loading?: boolean
}

export const BrandCard: React.FC<BrandCardProps> = ({
    image,
    loading,
    title, 
    id
}) => {

    const navigate = useNavigate();

    const onBrandClick = () => {
        navigate(`${BRAND_PATH}/${id}`);
    }

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
                onClick={onBrandClick}
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