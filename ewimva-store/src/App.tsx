import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import EwimvaBags from './screens/women/EwimvaBags/EwimvaBags';
import EwimvaCoatsWomen from './screens/women/EwimvaCoats/EwimvaCoats';
import EwimvaDress from './screens/women/EwimvaDress/EwimvaDress';
import EwimvaFragrances from './screens/women/EwimvaFragrances/EwimvaFragrances';
import EwimvaJumpersAndCardigans from './screens/women/EwimvaJumpersAndCardigans/EwimvaJumpersAndCardigans';
import EwimvaNewNow from './screens/women/EwimvaNewNow/EwimvaNewNow';
import EwimvaPantsWomen from './screens/women/EwimvaPants/EwimvaPants';
import EwimvaShirtsAndBlouses from './screens/women/EwimvaShirtsAndBlouses/EwimvaShirtsAndBlouses';
import EwimvaShoesWomen from './screens/women/EwimvaShoes/EwimvaShoes';
import EwimvaPartyAndEvents from './screens/women/EwimvaPartyAndEvents/EwimvaPartyAndEvents';

// Импорты Product для каждой категории (Women)
import { Product as BagsProduct } from "./screens/women/EwimvaBags/Product";
import { Product as CoatsProduct } from "./screens/women/EwimvaCoats/Product";
import { Product as DressProduct } from "./screens/women/EwimvaDress/Product";
import { Product as FragrancesProduct } from "./screens/women/EwimvaFragrances/Product";
import { Product as JumpersAndCardigansProduct } from "./screens/women/EwimvaJumpersAndCardigans/Product";
import { Product as NewProduct } from "./screens/women/EwimvaNewNow/Product";
import { Product as PantsProduct } from "./screens/women/EwimvaPants/Product";
import { Product as ShirtsAndBlousesProduct } from "./screens/women/EwimvaShirtsAndBlouses/Product";
import { Product as ShoesProduct } from "./screens/women/EwimvaShoes/Product";
import { Product as PartyProduct } from "./screens/women/EwimvaPartyAndEvents/Product";

// Men imports
import EwimvaJacketsOuterwear from './screens/men/JacketsOuterwear/EwimvaJacketsOuterwear';
import EwimvaPantsMen from './screens/men/Pants/EwimvaPants';
import EwimvaNewNowMen from './screens/men/NewNow/EwimvaNewNow';
import EwimvaShirtsMen from './screens/men/Shirts/EwimvaShirts';
import EwimvaShoesMen from './screens/men/Shoes/EwimvaShoes';
import EwimvaSuit from './screens/men/Suit/EwimvaSuit';

// Импорты Product для каждой категории (Men)
import { Product as MenJacketsOuterwearProduct } from "./screens/men/JacketsOuterwear/Product";
import { Product as MenNewProduct } from "./screens/men/NewNow/Product";
import { Product as MenPantsProduct } from "./screens/men/Pants/Product";
import { Product as MenShirtsProduct } from "./screens/men/Shirts/Product";
import { Product as MenShoesProduct } from "./screens/men/Shoes/Product";
import { Product as MenSuitProduct } from "./screens/men/Suit/Product";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Women Routes */}
            <Route path="/new" element={<EwimvaNewNow />} />
            <Route path="/new/product/:id" element={<NewProduct />} />
            <Route path="/bags" element={<EwimvaBags />} />
            <Route path="/bags/product/:id" element={<BagsProduct />} />
            <Route path="/coats" element={<EwimvaCoatsWomen />} />
            <Route path="/coats/product/:id" element={<CoatsProduct />} />
            <Route path="/dress" element={<EwimvaDress />} />
            <Route path="/dress/product/:id" element={<DressProduct />} />
            <Route path="/fragrances" element={<EwimvaFragrances />} />
            <Route path="/fragrances/product/:id" element={<FragrancesProduct />} />
            <Route path="/jumpers-and-cardigans" element={<EwimvaJumpersAndCardigans />} />
            <Route path="/jumpers-and-cardigans/product/:id" element={<JumpersAndCardigansProduct />} />
            <Route path="/pants" element={<EwimvaPantsWomen />} />
            <Route path="/pants/product/:id" element={<PantsProduct />} />
            <Route path="/shirts-and-blouses" element={<EwimvaShirtsAndBlouses />} />
            <Route path="/shirts-and-blouses/product/:id" element={<ShirtsAndBlousesProduct />} />
            <Route path="/shoes" element={<EwimvaShoesWomen />} />
            <Route path="/shoes/product/:id" element={<ShoesProduct />} />
            <Route path="/party" element={<EwimvaPartyAndEvents />} />
            <Route path="/party/product/:id" element={<PartyProduct />} />

            {/* Men Routes */}
            <Route path="/men/jackets-outerwear" element={<EwimvaJacketsOuterwear />} />
            <Route path="/men/jackets-outerwear/product/:id" element={<MenJacketsOuterwearProduct />} />
            <Route path="/men/pants" element={<EwimvaPantsMen />} />
            <Route path="/men/pants/product/:id" element={<MenPantsProduct />} />
            <Route path="/men/new" element={<EwimvaNewNowMen />} />
            <Route path="/men/new/product/:id" element={<MenNewProduct />} />
            <Route path="/men/shirts" element={<EwimvaShirtsMen />} />
            <Route path="/men/shirts/product/:id" element={<MenShirtsProduct />} />
            <Route path="/men/shoes" element={<EwimvaShoesMen />} />
            <Route path="/men/shoes/product/:id" element={<MenShoesProduct />} />
            <Route path="/men/suit" element={<EwimvaSuit />} />
            <Route path="/men/suit/product/:id" element={<MenSuitProduct />} />

            {/* Default Route */}
            <Route path="/" element={<EwimvaNewNow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;