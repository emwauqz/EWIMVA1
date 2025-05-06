import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import { EwimvaPokypka } from './screens/EwimvaPokypka';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const checkAuth = () => setIsAuthenticated(!!localStorage.getItem('token'));
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const ProtectedRoute = ({ children }) => {
    const location = useLocation();

    if (!isAuthenticated && !['/', '/men', '/login', '/register', '/recovery'].includes(location.pathname)) {
      return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
  };

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<EwimvaHome />} />
        <Route path="/men" element={<EwimvaMenHome />} />
        <Route path="/login" element={<EwimvaLogin />} />
        <Route path="/register" element={<EwimvaRegistry />} />
        <Route path="/recovery" element={<EwimvaRecovery />} />
        <Route
          path="/favourites"
          element={
            <ProtectedRoute>
              <EwimvaFavourite />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <EwimvaSeorch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new"
          element={
            <ProtectedRoute>
              <EwimvaNewNow />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <EwimvaClothes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <EwimvaMyAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/details"
          element={
            <ProtectedRoute>
              <EwimvaMyDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <EwimvaPomosh />
            </ProtectedRoute>
          }
        />
        <Route
          path="/purchases"
          element={
            <ProtectedRoute>
              <EwimvaPokypka />
            </ProtectedRoute>
          }
        />
        <Route element={<AdminLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <EwimvaDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <EwimvaTovary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:id/edit"
            element={
              <ProtectedRoute>
                <EditProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/add"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <EwimvaZakazy />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/:id/details"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/:id/edit"
            element={
              <ProtectedRoute>
                <EditOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <EwimvaPolzovateli />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/add"
            element={
              <ProtectedRoute>
                <AddUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/details"
            element={
              <ProtectedRoute>
                <UserDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/edit"
            element={
              <ProtectedRoute>
                <EditUser />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
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
// import AddUser from './screens/EwimvaPolzovateli/AddUser';
// import UserDetails from './screens/EwimvaPolzovateli/UserDetails';
// import EditUser from './screens/EwimvaPolzovateli/EditUser';
// import { EwimvaPokypka } from './screens/EwimvaPokypka';

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
//         <Route path="/purchases" element={<EwimvaPokypka />} />
//         <Route element={<AdminLayout />}>
//           <Route path="/dashboard" element={<EwimvaDashboard />} />
//           <Route path="/products" element={<EwimvaTovary />} />
//           <Route path="/products/:id/edit" element={<EditProduct />} />
//           <Route path="/products/add" element={<AddProduct />} />
//           <Route path="/orders" element={<EwimvaZakazy />} />
//           <Route path="/orders/:id/details" element={<OrderDetails />} />
//           <Route path="/orders/:id/edit" element={<EditOrder />} />
//           <Route path="/users" element={<EwimvaPolzovateli />} />
//           <Route path="/users/add" element={<AddUser />} />
//           <Route path="/users/:id/details" element={<UserDetails />} />
//           <Route path="/users/:id/edit" element={<EditUser />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );