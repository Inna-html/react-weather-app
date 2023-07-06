import './App.css';
import Location from './Components/Location';
import CurrentDay from './Components/CurrentDay';
import Info from './Components/Info';

function App({location}) {
  return (
    <div className="App">
      <Location location='Stockgolm'/>
      <CurrentDay date='Suturday, Aug 22'/>

      <Info weather={{
        temp:72,
        name:'Sunny',
        humidity: 62,
        uv:1
      }}/>
    </div>
  );
}

export default App;



