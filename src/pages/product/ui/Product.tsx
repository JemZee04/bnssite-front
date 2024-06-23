import { useParams, useSearchParams } from "react-router-dom";
import { useGetProductPageByProductIdQuery } from "../../../store/beekneesApi";
import { Col, ConfigProvider, Image, Modal, Rate, Row, Spin, Statistic, Tabs } from "antd";
import NO_IMAGE from '../../../assets/images/no_image.png';
import { LikeOutlined } from "@ant-design/icons";
import { BrandCard } from "../../../widgets/brands/BrandCard";
import { useMemo, useState } from "react";
import { Size } from "../../../@types/types";
import { SelectSizeCard } from "../../../components/SelectSizeCard";
import { AddToCartButton } from "../../../components/AddToCartButton";
import { AddToFavoritesButton } from "../../../components/AddToFavoritesButton";
import Reviews from "../../../widgets/reviews/Reviews";

const Product: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
            padding: 30,
            backgroundColor: "#2E3345",
        }}>
            <div style={{ width: '95%', margin: "0 auto", display: "flex", gap: 20 }}>
                <div style={{width: 733, height: 960}}>
                    <Image
                        width='100%'
                        height={'100%'}
                        src={data?.product?.images?.at(0)?.filepath ?? NO_IMAGE}
                        fallback={NO_IMAGE}
                    />
                </div>
                <Col span={12}>
                    <Row gutter={10}>
                        <Col span={12}>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: 25, marginBottom: 10}}>
                                <Rate value={data?.product?.rating ?? 1} disabled />
                                <div style={{display: "flex", gap: 5}}>
                                    <p onClick={() => setIsOpen(true)} style={{cursor: "pointer", color: "#C7C7C7", fontWeight: 400, fontSize: 24, fontFamily: "Source Sans 3"}}>{data?.product?.quantityReviews ?? 4} отзывов</p>
                                </div>
                            </div>
                            <div>
                                <h2 style={{fontFamily: 'Source Sans 3', color: "#FFFFFF", fontWeight: 700, fontSize:35}}>{data?.product?.name ?? 'Товар'}</h2>
                            </div>
                            <Row>
                                <h6 style={{fontFamily: 'Source Sans 3', color: "#FFFFFF", fontWeight: 400, fontSize:30}}>{data?.product?.shop?.name ?? 'Бренд'}</h6>
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
                        <div style={{fontFamily: 'Source Sans 3', color: "#FFFFFF", fontWeight: 700, fontSize:35, marginTop: 45}}>
                            {data?.product?.price ?? 'Цена не указана'} руб.
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
                    <div style={{padding: "10px 0 25px"}}>
                        {selectedSizeId && <div>{`Выбранный размер ${data?.product?.sizes?.find(size => size.id == selectedSizeId)?.name}`}</div>}
                        <p style={{fontFamily: "Source Sans 3", fontWeight: 400, fontSize: 24, color: "#FFFFFF", paddingBottom: 5}}>Выбрать размер:</p>
                        <SelectSizeCard sizes={data?.product?.sizes ?? [{ id: '2fsfs', name: 'XS' }]} onSelect={onSelectSize} />
                    </div>
                    <div style={{display: "flex", gap: 10, alignItems: "center"}}>
                        <div><AddToCartButton item={{ ...data?.product, colors: data?.product?.colors }} /></div>
                        <div> <AddToFavoritesButton item={{ ...data?.product, colors: data?.product?.colors }} /> </div>
                    </div>
                    <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: "Source Sans 3",
                                colorText: "#FFFFFF",
                                fontSize: 18
                            },
                            components: {
                                Tabs: {
                                    inkBarColor: "#BDFF2E",
                                    itemActiveColor: "#BDFF2E",
                                    itemColor: "#FFFFFF",
                                    itemSelectedColor: "#BDFF2E",
                                    titleFontSize: 20,
                                    itemHoverColor: "#BDFF2E",
                                    fontFamily: "Source Sans 3",
                                },
                            },
                        }}
                    >
                    <Tabs
                        defaultActiveKey='1'
                        items={[
                            { key: '1', label: 'Описание', children: data?.product?.description }
                        ]}
                    />
                    </ConfigProvider>
                </Col>
            </div>
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
                <Reviews/>
            </Modal>
            </ConfigProvider>
        </section>


}

export default Product;