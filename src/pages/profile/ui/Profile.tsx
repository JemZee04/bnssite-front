import { Avatar, Col, Row } from "antd";

const Profile: React.FC = () => {
    return(
        <Row style={{width: '100%'}}>
            <Col><Avatar></Avatar></Col>
            <Col>Имя пользователя</Col>
        </Row>
    )
}

export default Profile;