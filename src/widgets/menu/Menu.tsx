import { ShoppingCartOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Col, Menu, Row, Space } from "antd"

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
                    <Button iconPosition='end' icon = {<ShoppingCartOutlined />}>Корзина</Button>
                    <Button iconPosition='end' icon = {<SmileOutlined />}>Избранное</Button>
                    <Button iconPosition='end' icon = {<UserOutlined />}>Профиль</Button>
                </Space>
            </Col>
        </Row>
    </>
}