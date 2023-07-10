export function watchGeolocation(callback) {
    const watchId = navigator.geolocation.watchPosition(callback, (error) => console.error(error), {enableHighAccuracy: true});
    return () => navigator.geolocation.clearWatch(watchId)
}

