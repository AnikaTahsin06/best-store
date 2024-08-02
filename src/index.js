import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Footer, Navbar } from './components/layout';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ProductList from './pages/admin/products/ProductList';

function App() {
    return (
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/admin/products" element={<ProductList />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
