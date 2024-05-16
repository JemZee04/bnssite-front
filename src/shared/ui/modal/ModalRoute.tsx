import { PropsWithChildren } from "react"
import Portal from "../portal/Portal"
import { createPortal } from "react-dom"
import { Modal } from "antd"
import { useNavigate } from "react-router-dom"

type ModalRouteProps = {
    prevLocation: string
} & PropsWithChildren

export const ModalRoute: React.FC<ModalRouteProps> = ({ prevLocation, children }) => {

    const navigate = useNavigate();

    return <Modal
        open={true}
        onCancel={() => navigate(prevLocation)}
        footer={null}
    >
        {children}
    </Modal>
}