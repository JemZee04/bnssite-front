import { Outlet } from "react-router-dom";
import { Layout, Row } from 'antd';
import { Content, Footer, Header } from "antd/es/layout/layout";
import { MenuOutlined } from '@ant-design/icons';

const AppLayout: React.FC = () => {
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
        <Row>
          <MenuOutlined color='green'/>
          <h1 color='green'>BEE KNEES</h1>
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
