import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Cases } from './pages/Cases';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        {/* <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
