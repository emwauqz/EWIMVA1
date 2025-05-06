import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './tailwind.css';
import AdminLayout from './components/AdminLayout';
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
import OrderDetails from './screens/EwimvaZakazy/OrderDetails';
import EditOrder from './screens/EwimvaZakazy/EditOrder';
import EditProduct from './screens/EwimvaTovary/EditProduct';
import AddProduct from './screens/EwimvaTovary/AddProduct';
import AddUser from './screens/EwimvaPolzovateli/AddUser';
import UserDetails from './screens/EwimvaPolzovateli/UserDetails';
import EditUser from './screens/EwimvaPolzovateli/EditUser';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<EwimvaDashboard />} />
          <Route path="/products" element={<EwimvaTovary />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/orders" element={<EwimvaZakazy />} />
          <Route path="/orders/:id/details" element={<OrderDetails />} />
          <Route path="/orders/:id/edit" element={<EditOrder />} />
          <Route path="/users" element={<EwimvaPolzovateli />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/:id/details" element={<UserDetails />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './tailwind.css';
// import AdminLayout from './components/AdminLayout';
// import EwimvaHome from './screens/EwimvaHome/EwimvaHome';
// import EwimvaMenHome from './screens/EwimvaMenHome/EwimvaMenHome';
// import EwimvaLogin from './screens/EwimvaLogin/EwimvaLogin';
// import EwimvaRegistry from './screens/EwimvaRegistry/EwimvaRegistry';
// import EwimvaFavourite from './screens/EwimvaFavourite/EwimvaFavourite';
// import EwimvaSeorch from './screens/EwimvaSeorch/EwimvaSeorch';
// import EwimvaNewNow from './screens/EwimvaNewNow/EwimvaNewNow';
// import EwimvaClothes from './screens/EwimvaClothes/EwimvaClothes';
// import EwimvaMyAccount from './screens/EwimvaMyAccount/EwimvaMyAccount';
// import EwimvaMyDetails from './screens/EwimvaMyDetails/EwimvaMyDetails';
// import EwimvaRecovery from './screens/EwimvaRecovery/EwimvaRecovery';
// import EwimvaPomosh from './screens/EwimvaPomosh/EwimvaPomosh';
// import EwimvaPolzovateli from './screens/EwimvaPolzovateli/EwimvaPolzovateli';
// import EwimvaTovary from './screens/EwimvaTovary/EwimvaTovary';
// import EwimvaZakazy from './screens/EwimvaZakazy/EwimvaZakazy';
// import EwimvaDashboard from './screens/EwimvaDashboard/EwimvaDashboard';
// import OrderDetails from './screens/EwimvaZakazy/OrderDetails';
// import EditOrder from './screens/EwimvaZakazy/EditOrder';
// import EditProduct from './screens/EwimvaTovary/EditProduct';
// import AddProduct from './screens/EwimvaTovary/AddProduct';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<EwimvaHome />} />
//         <Route path="/men" element={<EwimvaMenHome />} />
//         <Route path="/login" element={<EwimvaLogin />} />
//         <Route path="/register" element={<EwimvaRegistry />} />
//         <Route path="/favourites" element={<EwimvaFavourite />} />
//         <Route path="/search" element={<EwimvaSeorch />} />
//         <Route path="/new" element={<EwimvaNewNow />} />
//         <Route path="/product" element={<EwimvaClothes />} />
//         <Route path="/account" element={<EwimvaMyAccount />} />
//         <Route path="/details" element={<EwimvaMyDetails />} />
//         <Route path="/recovery" element={<EwimvaRecovery />} />
//         <Route path="/help" element={<EwimvaPomosh />} />
//         <Route element={<AdminLayout />}>
//           <Route path="/dashboard" element={<EwimvaDashboard />} />
//           <Route path="/products" element={<EwimvaTovary />} />
//           <Route path="/products/:id/edit" element={<EditProduct />} />
//           <Route path="/products/add" element={<AddProduct />} />
//           <Route path="/orders" element={<EwimvaZakazy />} />
//           <Route path="/orders/:id/details" element={<OrderDetails />} />
//           <Route path="/orders/:id/edit" element={<EditOrder />} />
//           <Route path="/users" element={<EwimvaPolzovateli />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

