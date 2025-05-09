import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./tailwind.css";
import AdminLayout from "./components/AdminLayout";
import EwimvaHome from "./screens/EwimvaHome/EwimvaHome";
import EwimvaMenHome from "./screens/EwimvaMenHome/EwimvaMenHome";
import EwimvaLogin from "./screens/EwimvaLogin/EwimvaLogin";
import EwimvaRegistry from "./screens/EwimvaRegistry/EwimvaRegistry";
import EwimvaFavourite from "./screens/EwimvaFavourite/EwimvaFavourite";
import EwimvaSeorch from "./screens/EwimvaSeorch/EwimvaSeorch";
import EwimvaNewNow from "./screens/women/EwimvaNewNow/EwimvaNewNow";
import EwimvaDress from "./screens/women/EwimvaDress/EwimvaDress";
import EwimvaBags from "./screens/women/EwimvaBags/EwimvaBags";
import EwimvaCoatsWomen from "./screens/women/EwimvaCoats/EwimvaCoats";
import EwimvaFragrances from "./screens/women/EwimvaFragrances/EwimvaFragrances";
import EwimvaJacketsWomen from "./screens/women/EwimvaJackets/EwimvaJackets";
import EwimvaJeansWomen from "./screens/women/EwimvaJeans/EwimvaJeans";
import EwimvaJumpersAndCardigans from "./screens/women/EwimvaJumpersAndCardigans/EwimvaJumpersAndCardigans";
import EwimvaPantsWomen from "./screens/women/EwimvaPants/EwimvaPants";
import EwimvaShirtsAndBlouses from "./screens/women/EwimvaShirtsAndBlouses/EwimvaShirtsAndBlouses";
import EwimvaShoesWomen from "./screens/women/EwimvaShoes/EwimvaShoes";
import EwimvaTops from "./screens/women/EwimvaTops/EwimvaTops";
import EwimvaTshirtsWomen from "./screens/women/EwimvaTshirts/EwimvaTshirts";
import EwimvaVests from "./screens/women/EwimvaVests/EwimvaVests";
import EwimvaClothes from "./screens/EwimvaClothes/EwimvaClothes";
import EwimvaMyAccount from "./screens/EwimvaMyAccount/EwimvaMyAccount";
import EwimvaMyDetails from "./screens/EwimvaMyDetails/EwimvaMyDetails";
import EwimvaRecovery from "./screens/EwimvaRecovery/EwimvaRecovery";
import EwimvaPomosh from "./screens/EwimvaPomosh/EwimvaPomosh";
import EwimvaPolzovateli from "./screens/admin/EwimvaPolzovateli/EwimvaPolzovateli";
import EwimvaTovary from "./screens/admin/EwimvaTovary/EwimvaTovary";
import EwimvaZakazy from "./screens/admin/EwimvaZakazy/EwimvaZakazy";
import EwimvaDashboard from "./screens/admin/EwimvaDashboard/EwimvaDashboard";
import OrderDetails from "./screens/admin/EwimvaZakazy/OrderDetails";
import EditOrder from "./screens/admin/EwimvaZakazy/EditOrder";
import EditProduct from "./screens/admin/EwimvaTovary/EditProduct";
import AddProduct from "./screens/admin/EwimvaTovary/AddProduct";
import AddUser from "./screens/admin/EwimvaPolzovateli/AddUser";
import UserDetails from "./screens/admin/EwimvaPolzovateli/UserDetails";
import EditUser from "./screens/admin/EwimvaPolzovateli/EditUser";
import { EwimvaCheckout } from "./screens/EwimvaCheckout/EwimvaCheckout";
import EwimvaCart from "./screens/EwimvaCart/EwimvaCart";
import { EwimvaPokypka } from "./screens/EwimvaPokypka";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EwimvaPartyAndEvents from "./screens/women/EwimvaPartyAndEvents/EwimvaPartyAndEvents";

// Men imports
import EwimvaBackpacksAndBags from "./screens/men/BackpacksAndBags/EwimvaBackpacksAndBags";
import EwimvaCoatsMen from "./screens/men/Coats/EwimvaCoats";
import EwimvaHoodies from "./screens/men/Hoodies/EwimvaHoodies";
import EwimvaJacketsOuterwear from "./screens/men/JacketsOuterwear/EwimvaJacketsOuterwear";
import EwimvaJeansMen from "./screens/men/Jeans/EwimvaJeans";
import EwimvaPantsMen from "./screens/men/Pants/EwimvaPants";
import EwimvaShirtsMen from "./screens/men/Shirts/EwimvaShirts";
import EwimvaShoesMen from "./screens/men/Shoes/EwimvaShoes";
import EwimvaSuit from "./screens/men/Suit/EwimvaSuit";
import EwimvaSweaters from "./screens/men/Sweaters/EwimvaSweaters";
import EwimvaTshirtsMen from "./screens/men/Tshirts/EwimvaTshirts";

// Типизация для ProtectedRoute
interface ProtectedRouteProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("userRole") === "admin");
  const location = useLocation(); // Теперь useLocation импортирован и работает корректно

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
      setIsAdmin(localStorage.getItem("userRole") === "admin");
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAdmin: adminOnly = false }) => {
    console.log("ProtectedRoute", { isAuthenticated, isAdmin, location: location.pathname }); // Для отладки
    if (!isAuthenticated && !["/", "/men", "/login", "/register", "/recovery"].includes(location.pathname)) {
      return <Navigate to="/login" replace />;
    }
    if (adminOnly && !isAdmin) {
      return <Navigate to="/account" replace />;
    }
    return <>{children}</>;
  };

  // Список админских маршрутов, где футер не нужен
  const adminPaths = [
    "/dashboard",
    "/orders",
    "/orders/:id/details",
    "/orders/:id/edit",
    "/products",
    "/products/:id/edit",
    "/products/add",
    "/users",
    "/users/add",
    "/users/:id/details",
    "/users/:id/edit",
  ];

  const showFooter = !adminPaths.some((path) =>
    location.pathname.startsWith(path.replace(/:id/, "[^/]+"))
  );

  return (
    <>
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
          path="/checkout"
          element={
            <ProtectedRoute>
              <EwimvaCheckout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <EwimvaCart />
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
          path="/dress"
          element={
            <ProtectedRoute>
              <EwimvaDress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bags"
          element={
            <ProtectedRoute>
              <EwimvaBags />
            </ProtectedRoute>
          }
        />
        <Route
          path="/party"
          element={
            <ProtectedRoute>
              <EwimvaPartyAndEvents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coats"
          element={
            <ProtectedRoute>
              <EwimvaCoatsWomen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fragrances"
          element={
            <ProtectedRoute>
              <EwimvaFragrances />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jackets"
          element={
            <ProtectedRoute>
              <EwimvaJacketsWomen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jeans"
          element={
            <ProtectedRoute>
              <EwimvaJeansWomen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jumpers-and-cardigans"
          element={
            <ProtectedRoute>
              <EwimvaJumpersAndCardigans />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pants"
          element={
            <ProtectedRoute>
              <EwimvaPantsWomen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shirts-and-blouses"
          element={
            <ProtectedRoute>
              <EwimvaShirtsAndBlouses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shoes"
          element={
            <ProtectedRoute>
              <EwimvaShoesWomen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tops"
          element={
            <ProtectedRoute>
              <EwimvaTops />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tshirts"
          element={
            <ProtectedRoute>
              <EwimvaTshirtsWomen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vests"
          element={
            <ProtectedRoute>
              <EwimvaVests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
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
        <Route
          path="/men/backpacks-and-bags"
          element={
            <ProtectedRoute>
              <EwimvaBackpacksAndBags />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/coats"
          element={
            <ProtectedRoute>
              <EwimvaCoatsMen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/hoodies"
          element={
            <ProtectedRoute>
              <EwimvaHoodies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/jackets-outerwear"
          element={
            <ProtectedRoute>
              <EwimvaJacketsOuterwear />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/jeans"
          element={
            <ProtectedRoute>
              <EwimvaJeansMen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/pants"
          element={
            <ProtectedRoute>
              <EwimvaPantsMen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/shirts"
          element={
            <ProtectedRoute>
              <EwimvaShirtsMen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/shoes"
          element={
            <ProtectedRoute>
              <EwimvaShoesMen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/suit"
          element={
            <ProtectedRoute>
              <EwimvaSuit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/sweaters"
          element={
            <ProtectedRoute>
              <EwimvaSweaters />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men/tshirts"
          element={
            <ProtectedRoute>
              <EwimvaTshirtsMen />
            </ProtectedRoute>
          }
        />
        <Route element={<AdminLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAdmin={true}>
                <EwimvaDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute isAdmin={true}>
                <EwimvaTovary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:id/edit"
            element={
              <ProtectedRoute isAdmin={true}>
                <EditProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/add"
            element={
              <ProtectedRoute isAdmin={true}>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute isAdmin={true}>
                <EwimvaZakazy />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/:id/details"
            element={
              <ProtectedRoute isAdmin={true}>
                <OrderDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/:id/edit"
            element={
              <ProtectedRoute isAdmin={true}>
                <EditOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute isAdmin={true}>
                <EwimvaPolzovateli />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/add"
            element={
              <ProtectedRoute isAdmin={true}>
                <AddUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/details"
            element={
              <ProtectedRoute isAdmin={true}>
                <UserDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/edit"
            element={
              <ProtectedRoute isAdmin={true}>
                <EditUser />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/login" replace />} // Редирект на /login для неизвестных путей
        />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

// Проверка на существующий root
const rootElement = document.getElementById("root")!;
let root;

if (rootElement.hasChildNodes()) {
  root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}