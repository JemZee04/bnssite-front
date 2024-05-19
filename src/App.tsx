import { Outlet, useNavigate } from "react-router-dom";
import { Button, Col, Layout, Row, Typography } from 'antd';
import { Content, Footer, Header } from "antd/es/layout/layout";
import { AppMenu } from "./widgets/menu/Menu";
import { HOME_PATH } from "./shared/utils/constants";


const AppLayout: React.FC = () => {

  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Row gutter={[10, 10]} style={{ width: '100%' }} justify='center' align='middle'>
          {/* <Col>
            <BurgerMenu />
          </Col> */}
          <Col>
            <Typography.Title level={1} onClick={() => navigate(HOME_PATH)} style={{
              color: 'greenyellow',
              // letterSpacing: '90px',
              textAlign: 'center',
              cursor: 'pointer',
              margin: 0
            }}>BEEKNEES</Typography.Title>
          </Col>
          <Col flex={'auto'}>
            <AppMenu />
          </Col>

          {/* <Col >
            <h1 color='green' s>BEE KNEES</h1>
          </Col> */}

        </Row>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        Самый стандартный футер
      </Footer>
    </Layout>
  )
}

export default AppLayout;
