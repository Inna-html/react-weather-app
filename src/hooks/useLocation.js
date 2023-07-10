import {useState, useEffect} from  'react';
import {watchGeolocation} from '../services/geolocation';


export function useLocation() {
    const [position, setPosition] = useState({latitude: 0, longitude: 0});
    useEffect (() => {
        return watchGeolocation(({cords}) => { // приходит из навигатора
            if (cords && (position.latitude !== cords.latitude || position.longitude !== cords.longitude)) {
                setPosition({latitude: cords.latitude, longitude: cords.longitude})
            }
        })
    }, [position]);
    return position;
}
