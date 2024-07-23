import "./App.css"
import {Route, Routes} from "react-router-dom";
import LaAbout from "./about.tsx";
import LaApp from "./MainPage.tsx";
import LaHeader from "./head.tsx";

function App() {

  return (
      <div>
          <LaHeader/>
          <Routes>
              <Route path="/"  element={<LaApp/>}/>
              <Route path="/about" element={<LaAbout/>}/>
          </Routes>
      </div>
  )
}

export default App
