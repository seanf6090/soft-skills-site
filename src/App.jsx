import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import MessagePortal from './pages/MessagePortal';
import ExploreConnections from './pages/ExploreConnections';
import MyConnections from './pages/MyConnections';
import SoftSkillsGame from './pages/SoftSkillsGame';

function App() {
  const [addedConnections, setAddedConnections] = useState([]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/message' element={<MessagePortal />} />
        <Route path='/explore' element={<ExploreConnections addedConnections={addedConnections} setAddedConnections={setAddedConnections} />} />
        <Route path='/connections' element={<MyConnections addedConnections={addedConnections} />} />
        <Route path='/softskills-game' element={<SoftSkillsGame />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;