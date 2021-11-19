import "./App.css";
import { Routes, Route } from "react-router";
import PublicSearch from "./components/PublicSearch";
import EntryPublic from "./components/EntryPublic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/entries" element={<PublicSearch />} />
        <Route path="/entry" element={<EntryPublic/>} />
      </Routes>
      {/* <div className="App">
        <PublicSearch />
      </div> */}
    </div>
  );
}

export default App;
