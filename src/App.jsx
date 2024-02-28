import "./App.css";
import Selection from "./components/Selection";
import Weather from "./components/Weather";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  const [city, setCity] = useState("London");
  return (
    <div id="main">
      {/* Provider: provide the context to all the components
          Value: variables to provide
      */}
      <AppContext.Provider value={{ city, setCity }}>
        <Selection />
        <Weather />
      </AppContext.Provider>
    </div>
  );
}

export default App;
