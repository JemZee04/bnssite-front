import { Card } from "antd"

type BrandCardProps = {
    image: string,
    title: string,
    loading?: boolean
}

export const BrandCard: React.FC<BrandCardProps> = ({
    image,
    loading,
    title
}) => {
    return (
        <Card
            loading={loading}
            hoverable
            
            style={{
                maxWidth: 500,
                maxHeight: 220
            }}
            // cover = {<img src={image} alt="Brand logo"></img>}
        >
            <div style={{
                textAlign: 'center',
                fontSize: '52px'
                
            }}>{title}</div>
        </Card>
    )
}