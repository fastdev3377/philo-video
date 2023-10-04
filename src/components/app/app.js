import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Guide } from '../guide/guide';
import { Navbar } from '../navbar/navbar';
import { Player } from '../player/player';

import './app.module.sass';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Guide />} />
        <Route path="live" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
