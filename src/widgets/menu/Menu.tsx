import { UserOutlined } from "@ant-design/icons"
import { Button, Col, Menu, Row, Space } from "antd"
import { CartButton } from "../../components/CartButton"
import { FavoritesButton } from "../../components/FavoritesButton"

export const AppMenu: React.FC = () => {
    return <>
        <Row justify='space-between'>
            <Col>
                {/* <Menu expandIcon/> */}
            </Col>
            <Col >
                <Space size={10}>
                    <CartButton />
                    {/* <FavoritesButton /> */}
                    <Button iconPosition='end' icon={<UserOutlined />}>Профиль</Button>
                </Space>
            </Col>
        </Row>
    </>
}