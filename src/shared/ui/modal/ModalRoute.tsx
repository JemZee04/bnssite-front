import { PropsWithChildren } from "react"
import Portal from "../portal/Portal"
import { createPortal } from "react-dom"
import { ConfigProvider, Modal } from "antd"
import { useNavigate } from "react-router-dom"
import styles from "./ModalRoute.module.css";

type ModalRouteProps = {
    prevLocation: string
} & PropsWithChildren

export const ModalRoute: React.FC<ModalRouteProps> = ({ prevLocation, children }) => {

    const navigate = useNavigate();

    return <ConfigProvider
        theme={{
            token: {
                borderRadiusLG: 20,
                borderRadiusSM: 20,
                colorPrimaryBorder: "#BDFF2E",
                lineWidth: 4,
                lineType: "solid"
            },
            components: {
                Modal: {
                    contentBg: "#6712FB",
                    titleColor: "#FFFFFF"
                },
            },
        }}
    >
        <Modal
            className={styles.Modal}
            width="677px"
            style={{border: "4px solid #BDFF2E", borderRadius: "20px", padding: 0}}
            open={true}
            onCancel={() => navigate(prevLocation)}
            footer={null}
        >
            {children}
        </Modal>
    </ConfigProvider>

}