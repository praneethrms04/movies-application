import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Movies from "./pages/homepage/Movies";
import Authentication from "./pages/authentication/Authentication";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/login" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
