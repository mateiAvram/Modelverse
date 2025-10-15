import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { About } from "./pages/About";
import { Cases } from "./pages/Cases";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/cases" element={<Cases />} />
    //     <Route path="/team" element={<Team />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
