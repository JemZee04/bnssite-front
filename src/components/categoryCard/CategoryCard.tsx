import { Card, ConfigProvider } from "antd";
import { useState } from "react";
import { MenuItem } from "../../store/beekneesApi";
import styles from "./CategoryCard.module.css";

type CategoryCardProps = {
    item: MenuItem;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ item }) => {
    const [ isActive, setIsActive ] = useState(false);

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
            <Card>
                <div 
                    className={styles.CardDiv}
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}>
                        {
                            isActive
                            ? <button className={styles.CardButton}>{item.text ?? "Футболки"}</button>
                            : null
                        }
                        
                </div>
            </Card>
        </ConfigProvider>
    )
}

export default CategoryCard;