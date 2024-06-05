import { useNavigate } from "react-router-dom";
import LogoFooter from "../../assets/images/logoFooter.svg";
import { HOME_PATH } from "../../shared/utils/constants";
import styles from "./Footer.module.css";
import VK from "../../assets/images/vk.svg";
import Telegram from "../../assets/images/telegram.svg";
import Instagram from "../../assets/images/instagram.svg";
import Pay from "../../assets/images/pay.svg";
import { Input } from "antd";

const Footer: React.FC = () => {
    const navigate = useNavigate();

    return(
        <div style={{background: "linear-gradient(0deg, #222633, #252938)", padding: "50px", display: "flex", justifyContent: "space-between"}}>
            <div style={{height: "138px", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "150px"}}>
                <img src={LogoFooter} alt="logo" onClick={() => navigate(HOME_PATH)} style={{cursor: "pointer"}}/>
                <p className={styles.FooterContent}>© 2024 Bee knees</p>
            </div>
            
            <div style={{width: "fit-content", height: "138px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <h3 className={styles.FooterTitle}>Компания</h3>
                <p className={styles.FooterContent}>О нас</p>
                <p className={styles.FooterContent}>Магазины</p>
            </div>

            <div style={{width: "fit-content", height: "138px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <h3 className={styles.FooterTitle}>Информация</h3>
                <p className={styles.FooterContent}>Доставка и оплата</p>
                <p className={styles.FooterContent}>Обмен и возврат</p>
            </div>

            <div style={{width: "fit-content", height: "138px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <h3 className={styles.FooterTitle}>Контакты</h3>
                <p className={styles.FooterContent}>Обратная связь</p>
                <div style={{display: "flex", width:"138px", justifyContent: "space-between"}}>
                    <img src={VK} alt="vk"/>
                    <img src={Telegram} alt="telegram"/>
                    <img src={Instagram} alt="instagram"/>
                </div>
            </div>

            <div style={{width: "fit-content", height: "89px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <h3 className={styles.FooterTitle}>Способы оплаты</h3>
                <img src={Pay} alt="pay"/>
            </div>

            <div style={{width: "fit-content", height: "89px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <h3 className={styles.FooterTitle}>Подписка на новости и акции</h3>
                <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                    <Input
                        placeholder="Введите свой e-mail"/>
                    <button className={styles.SubscribeButton}>Подписаться</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;