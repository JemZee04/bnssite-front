import { Placemark } from "@pbe/react-yandex-maps";
import axios from "axios";
import { useEffect, useState } from "react";
import { useGeocoder } from "../../shared/utils/UseGeocoder";

type PlaceMapProps = {
    latitude: number;
    longitude: number;
    id: number;
    isActive: boolean;
    clickHandler: (i: number) => void;
}

const PlaceMap: React.FC<PlaceMapProps> = ({latitude, longitude, id, clickHandler, isActive}) => {
    const [address, setAddress] = useState<string>('');
    const [fetchAddress, isAddressLoading, addressError] = useGeocoder(async() => {
        const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=29e64032-86a4-4346-97ad-7f1d1eec4ae2&geocode=${longitude},${latitude}&format=json`);
        setAddress(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.description + ", " + response.data.response.GeoObjectCollection.featureMember[0].GeoObject.name);
    });

    useEffect(() => {
        fetchAddress();
    }, []);

    return(
        <>
            {
                isAddressLoading
                ?   null
                :   <Placemark 
                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        defaultGeometry={[latitude, longitude]} 
                        properties={{
                            hintContent: address,
                            balloonContent: `Адрес: ${address}`,
                            balloonContentHeader: `Пункт выдачи №${id}`
                        }}
                        
                        options={{
                            iconColor: isActive ? 'red': 'blue'
                        }}
                        
                        onClick={() => clickHandler(id - 1)}/>
            }
        </>
    )
}

export default PlaceMap;