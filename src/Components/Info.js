
export default function Info({temp, icon, name, humidity, uv}) {
    return (
      <div className="DAyAndDate">

        <div className='bottom'>
          <div className='tempa'>
            {temp}°F
          </div>
          <div claasName='state'>
            <img className="weatherIcon" src={icon} alt={name} /> <br/>
            {name} <br />
            &#x1F4A7;{humidity}%,
            {uv}High
          </div>
          
          

        </div>
      </div>
    );
  }

