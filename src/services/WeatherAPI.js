const key = '1d09c81128e649998e814603232506';

export const current = async (position) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${position.latitude},${position.longitude}`);
    return response.json()
}


