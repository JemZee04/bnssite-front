import { Card } from "antd"

type BrandCardProps = {
    image: string,
    loading?: boolean
}

export const BrandCard: React.FC<BrandCardProps> = ({
    image,
    loading
}) => {
    return (
        <Card
            loading={loading}
            hoverable
            style={{
                maxWidth: 500,
                maxHeight: 220
            }}
            cover = {<img src={image} alt="Brand logo"></img>}
        />
    )
}