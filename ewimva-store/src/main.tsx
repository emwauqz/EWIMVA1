import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './tailwind.css';
import EwimvaHome from './screens/EwimvaHome/EwimvaHome';
import EwimvaMenHome from './screens/EwimvaMenHome/EwimvaMenHome';
import EwimvaLogin from './screens/EwimvaLogin/EwimvaLogin';
import EwimvaRegistry from './screens/EwimvaRegistry/EwimvaRegistry';
import EwimvaFavourite from './screens/EwimvaFavourite/EwimvaFavourite';
import EwimvaSeorch from './screens/EwimvaSeorch/EwimvaSeorch';
import EwimvaNewNow from './screens/EwimvaNewNow/EwimvaNewNow';
import EwimvaClothes from './screens/EwimvaClothes/EwimvaClothes';
import EwimvaMyAccount from './screens/EwimvaMyAccount/EwimvaMyAccount';
import EwimvaMyDetails from './screens/EwimvaMyDetails/EwimvaMyDetails';
import EwimvaRecovery from './screens/EwimvaRecovery/EwimvaRecovery';
import EwimvaPomosh from './screens/EwimvaPomosh/EwimvaPomosh';
import EwimvaPolzovateli from './screens/EwimvaPolzovateli/EwimvaPolzovateli';
import EwimvaTovary from './screens/EwimvaTovary/EwimvaTovary';
import EwimvaZakazy from './screens/EwimvaZakazy/EwimvaZakazy';
import EwimvaDashboard from './screens/EwimvaDashboard/EwimvaDashboard';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<EwimvaHome />} />
      <Route path="/men" element={<EwimvaMenHome />} />
      <Route path="/login" element={<EwimvaLogin />} />
      <Route path="/register" element={<EwimvaRegistry />} />
      <Route path="/favourites" element={<EwimvaFavourite />} />
      <Route path="/search" element={<EwimvaSeorch />} />
      <Route path="/new" element={<EwimvaNewNow />} />
      <Route path="/product" element={<EwimvaClothes />} />
      <Route path="/account" element={<EwimvaMyAccount />} />
      <Route path="/details" element={<EwimvaMyDetails />} />
      <Route path="/recovery" element={<EwimvaRecovery />} />
      <Route path="/help" element={<EwimvaPomosh />} />
      <Route path="/users" element={<EwimvaPolzovateli />} />
      <Route path="/products" element={<EwimvaTovary />} />
      <Route path="/orders" element={<EwimvaZakazy />} />
      <Route path="/dashboard" element={<EwimvaDashboard />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
