import { Provider } from "./Geolocation";

export default function Location({location}) {

    return (
      <div className="location">
        <img width="50" height="50" color="grey" src="https://img.icons8.com/ios/50/FFFFFF/marker--v1.png" alt="marker"/>
        <Provider />
      </div>
    )
  }






