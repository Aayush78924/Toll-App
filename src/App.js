import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './component/Header';
import BoothMaster from './component/Body/BoothMaster';
import CompanyName from './component/Body/CompanyName';
import TollName from './component/Body/TollName';
import JourneyMaster from './component/Body/JourneyMaster';
import VehicleMaster from './component/Body/VehicleMaster';
import TollPlazaFeeRules from './component/Body/TollPlazaFeeRules';
import Users from './component/Body/User';
import BoothTransaction from './component/Body/BoothTransaction';
import Login from './component/Login';

function App() {
  const [active, setActive] = useState("boothtransaction");
  const [username, setUsername] = useState();

  if(!username) return <Login setUsername={setUsername} />

  return (
    <div>
      <Header 
        setActive={setActive} 
        active={active} 
        setUsername={setUsername} 
        username={username} />
      
      {active==="boothtransaction" && <BoothTransaction />}
      {active==="boothmaster" && username==="admin" && <BoothMaster />}
      {active==="companyname" && username==="admin" && <CompanyName />}
      {active==="tollname" && username==="admin" && <TollName />}
      {active==="journeymaster" && username==="admin" && <JourneyMaster />}
      {active==="vehiclemaster" && username==="admin" && <VehicleMaster />}
      {active==="tollplazafeerules" && username==="admin" && <TollPlazaFeeRules />}
      {active==="users" && username==="admin" && <Users />}
    </div>
  );
}

export default App;
