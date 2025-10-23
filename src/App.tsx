import { CookieBanner } from './components/app/cookies/cookieBanner';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { Cases } from './pages/Cases';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <HashRouter>
      <CookieBanner></CookieBanner>
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
