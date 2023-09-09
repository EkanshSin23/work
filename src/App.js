import logo from "./logo.svg";
// import "./App.css";
import CoreValues from "./components/coreValues/CoreValues";
import ArtOfLeadership from "./components/artOfLeadership/ArtOfLeadership";
import Events from "./components/eventsFolder/Events";

function App() {
  return (
    <div className="App">
      <CoreValues />
      <ArtOfLeadership />
      <Events />
    </div>
  );
}

export default App;
