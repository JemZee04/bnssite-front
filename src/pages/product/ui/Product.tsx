import { useParams, useSearchParams } from "react-router-dom";
import { useGetProductPageByProductIdQuery } from "../../../store/beekneesApi";
import { Col, Image, Rate, Row, Spin, Statistic, Tabs } from "antd";
import NO_IMAGE from '../../../assets/images/no_image.png';
import { LikeOutlined } from "@ant-design/icons";
import { BrandCard } from "../../../widgets/brands/BrandCard";
import { useMemo } from "react";
import { Size } from "../../../@types/types";
import { SelectSizeCard } from "../../../components/SelectSizeCard";
import { AddToCartButton } from "../../../components/AddToCartButton";
import { AddToFavoritesButton } from "../../../components/AddToFavoritesButton";

const Product: React.FC = () => {

    const params = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const selectedColorId = useMemo(() => searchParams.get('colorId')?.at(0), [searchParams]);
    const selectedSizeId = useMemo(() => searchParams.get('size')?.at(0), [searchParams]);

    const onSelectColor = (color: any) => {
        searchParams.set('colorId', color.id);
    }

    const onSelectSize = (size: Size) => {
        searchParams.set('size', (size?.id ?? '').toString());
    }

    console.log('PRODUCT ID PARAM ', params['productId']);


    const { isLoading, data } = useGetProductPageByProductIdQuery({ "product-id": params['productId'] ?? '' });

    return isLoading
        ? <Spin />
        : <section style={{
            padding: 30
        }}>
            <Row style={{ width: '100%' }} gutter={30}>
                <Col span={12}>
                    <Image
                        width='100%'
                        height={'100%'}
                        src={data?.product?.images?.at(0)?.filepath ?? NO_IMAGE}
                        fallback={NO_IMAGE}
                    />
                </Col>
                <Col span={12}>
                    <Row gutter={10}>
                        <Col span={12}>
                            <Row justify='space-between' align='middle'>
                                <Rate value={data?.product?.rating ?? 1} disabled />
                                <Statistic value={data?.product?.quantityReviews ?? 0} title='Отзывов' prefix={<LikeOutlined />} />
                            </Row>
                            <Row>
                                <h2>{data?.product?.name ?? 'Товар'}</h2>
                            </Row>
                            <Row>
                                <h6>{data?.product?.shop?.name ?? 'Бренд'}</h6>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <BrandCard
                                title={data?.product?.shop?.name ?? 'Бренд'}
                                image={data?.product?.shop?.logo_image?.filepath ?? ''}
                                id={data?.product?.shop?.id ?? ''}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <div style={{ fontSize: 40, fontWeight: 'bold' }}>
                            {data?.product?.price ?? 'Цена не указана'}
                        </div>
                    </Row>
                    <Row gutter={20}>
                        <Col flex='auto'>
                            {selectedColorId && <div>{`Выбранный цвет ${data?.product?.colors?.find(color => color.id == selectedColorId)?.name}`}</div>}
                            {data?.product?.colors?.map((color) => (
                                <div style={{
                                    width: 50, height: 50, backgroundColor: color.hex ?? 'red'
                                }}></div>
                            ))}
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        {selectedSizeId && <div>{`Выбранный размер ${data?.product?.sizes?.find(size => size.id == selectedSizeId)?.name}`}</div>}
                        <SelectSizeCard sizes={data?.product?.sizes ?? [{ id: '2fsfs', name: 'XS' }]} onSelect={onSelectSize} />
                    </Row>
                    <Row gutter={20}>
                        <Col span={16}><AddToCartButton item={{ ...data?.product, colors: data?.product?.colors }} /></Col>
                        <Col span={8}> <AddToFavoritesButton item={{ ...data?.product, colors: data?.product?.colors }} /> </Col>
                    </Row>
                    <Tabs
                        defaultActiveKey='1'
                        items={[
                            { key: '1', label: 'Описание', children: data?.product?.description }
                        ]}
                    />
                </Col>
            </Row>
        </section>


}

export default Product;