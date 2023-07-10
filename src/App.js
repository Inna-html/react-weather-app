import {useState, useEffect, useContext} from 'react';
import './App.css';
import Location from './Components/Location';
import CurrentDay from './Components/CurrentDay';
import Info from './Components/Info';
import {context} from './Components/Geolocation'; 
import {current} from './services/WeatherAPI';


function App() {
  const position = useContext(context);
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try{
        const data = await current(position);
        setWeather(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [position]);

  if (loading || !weather) {
    return 'Loading...';
  }
  
  return (
    <div className="App">
      <Location location={weather.location.name}/>
      <CurrentDay date='Suturday, Aug 22'/>

    <div className='spacebetween'></div>

      <Info
        temp = {weather.current.temp_f}
        icon = {weather.current.condition.icon}
        name = {weather.current.condition.text}
        humidity = {weather.current.humidity}
        uv = {weather.current.uv}
      />
    </div>
  );
}

export default App;
