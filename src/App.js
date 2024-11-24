import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StockSearch from './components/StockSearch';
import StockDetails from './components/StockDetails';
import Portfolio from './components/Portfolio';
import Watchlist from './components/Watchlist';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<StockSearch />} />
      <Route path="/details/:symbol" element={<StockDetails />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
  </Router>
);

export default App;
