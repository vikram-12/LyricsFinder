import "./App.css";
import Container from "./pages/Container";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lyrics from "./pages/Lyrics";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/lyrics/:commonId" element={<Lyrics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
