import { ShoppingCartOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Col, Menu, Row, Space } from "antd"
import { CartButton } from "../../components/CartButton"

export const AppMenu: React.FC = () => {
    return <>
        <Row justify='space-between'>
            <Col>
                <Menu
                    expandIcon
                />
            </Col>
            <Col >
                <Space size={10}>
                    <CartButton />
                    <Button iconPosition='end' icon={<SmileOutlined />}>Избранное</Button>
                    <Button iconPosition='end' icon={<UserOutlined />}>Профиль</Button>
                </Space>
            </Col>
        </Row>
    </>
}