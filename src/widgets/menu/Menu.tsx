import { UserOutlined } from "@ant-design/icons"
import { Button, Col, Menu, MenuProps, Row, Space } from "antd"
import { CartButton } from "../../components/CartButton"
import { FavoritesButton } from "../../components/FavoritesButton"
import { Link, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { CATALOG_PATH } from "../../shared/utils/constants";


type MenuItem = Required<MenuProps>['items'][number];


export const AppMenu: React.FC = () => {

    const [params, setSearchParams] = useSearchParams();

    const headerMenu = useMemo(() => params.get('gender')
        ? [
            {
                label: <Link to={`${CATALOG_PATH}?gender=man`} ><h2>Мужское</h2></Link>,
                key: 'man'
            },
            {
                label: <Link to={`${CATALOG_PATH}?gender=woman`} ><h2>Женское</h2></Link>,
                key: 'woman'
            },
        ]
        : [],
        [params])

    return <>
        <Row justify='space-between'>
            <Col flex={'auto'}>
                <Menu
                    color='transparent'
                    theme='dark'
                    selectedKeys={params.get('gender') ? [params.get('gender') ?? ''] : []}
                    mode='horizontal'
                    items={headerMenu} />
            </Col>
            <Col >
                <Space size={10}>
                    <CartButton />
                    <FavoritesButton />
                    <Button iconPosition='end' icon={<UserOutlined />}>Профиль</Button>
                </Space>
            </Col>
        </Row>
    </>
}