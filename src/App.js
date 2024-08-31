
import React from 'react';
import { Divider } from '@mui/material';
import { Header,Footer} from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home,ProductPage } from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Divider/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category/:brand" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
