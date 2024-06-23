import { Button, ConfigProvider, Input, Modal, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import Logo from "../../assets/icons/logo_reviews.svg";

type Review = {
    name: string;
    content: string;
    rating: number;
}

const ReviewsItems: Review[] = [
    {
        name: "Анна",
        rating: 3,
        content: "Из-за отсутствия селиконовой нашивки платье постоянно съезжает. Верх пошит криво (одна сторона выше другой). Подклад выворачивается на лифе."
    },
    {
        name: "Eлена",
        rating: 5,
        content: "Шикарное платье, влюбилась с первого взгляда"
    },
    {
        name: "Максим",
        rating: 5,
        content: "Брал в подарок, всё подошло"
    },
    {
        name: "Галина",
        rating: 1,
        content: "Не подошло, возврат"
    }
]

const Reviews: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [rating, setRating] = useState<number>(0);

    const clickHandler = () => {
        ReviewsItems.push({
            name: name,
            content: content,
            rating: rating
        });
        setIsOpen(false);
    }

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 15}}>
            <img src={Logo} alt="logo"/>
            <Button onClick={() => setIsOpen(true)}>Добавить отзыв</Button>
            <p style={{width: "100%", display: "inline-block", textAlign: "left", fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 24, color: "#FFFFFF"}}>Отзывы о товаре:</p>
            {
                ReviewsItems.map((item, index) => {
                    return  <div key={index} style={{width: "100%"}}>
                        <p style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 16, color: "#FFFFFF"}}>{item.name}</p>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <p style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 16, color: "#FFFFFF"}}>{new Date().toLocaleDateString()}</p>
                            <Rate value={item.rating ?? 1} disabled />
                        </div>
                        <div style={{border: "2px solid #BDFF2E", backgroundColor: "#FFFFFF", padding: "10px 20px", borderRadius: 20}}>
                            <p style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 16, color: "#000000"}}>{item.content}</p>
                        </div>
                    </div>
                })
            }
            <ConfigProvider
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
            <Modal open={isOpen} onCancel={() => setIsOpen(false)} footer={[]}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 15}}>
                    <img src={Logo} alt="logo"/>
                    <p style={{fontFamily: "Source Sans 3", fontWeight: 700, fontSize: 24, color: "#FFFFFF", padding: "0 0 15px"}}>Напишите свой отзыв</p>
                    <Input onChange={(e) => setName(e.target.value)} placeholder="Введите имя..."/>
                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <p style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 20, color: "#FFFFFF"}}>Поставьте оценку товару:</p>
                        <Rate onChange={(value) => setRating(value)}/>
                    </div>
                    <TextArea onChange={(e) => setContent(e.target.value)} placeholder="Напишите ваше мнение о товаре..."/>
                    <Button onClick={clickHandler}>Отправить</Button>
                </div>
            </Modal>
            </ConfigProvider>
        </div>
    )
}

export default Reviews;