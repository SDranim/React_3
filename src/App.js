import Address from "./components/Address"
import './App.css';
import FullName from "./components/FullName"
import ProfilePhoto from "./components/ProfilePhoto";

function App() {
  return (
    <div className="app">
<ProfilePhoto/>
<FullName/>
<Address/>

    </div>
  );
}

export default App;
