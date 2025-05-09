import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EwimvaBags from './screens/women/EwimvaBags/EwimvaBags';
import EwimvaCoatsWomen from './screens/women/EwimvaCoats/EwimvaCoats';
import EwimvaDress from './screens/women/EwimvaDress/EwimvaDress';
import EwimvaFragrances from './screens/women/EwimvaFragrances/EwimvaFragrances';
import EwimvaJacketsWomen from './screens/women/EwimvaJackets/EwimvaJackets';
import EwimvaJeansWomen from './screens/women/EwimvaJeans/EwimvaJeans';
import EwimvaJumpersAndCardigans from './screens/women/EwimvaJumpersAndCardigans/EwimvaJumpersAndCardigans';
import EwimvaNewNow from './screens/women/EwimvaNewNow/EwimvaNewNow';
import EwimvaPantsWomen from './screens/women/EwimvaPants/EwimvaPants';
import EwimvaShirtsAndBlouses from './screens/women/EwimvaShirtsAndBlouses/EwimvaShirtsAndBlouses';
import EwimvaShoesWomen from './screens/women/EwimvaShoes/EwimvaShoes';
import EwimvaTops from './screens/women/EwimvaTops/EwimvaTops';
import EwimvaTshirtsWomen from './screens/women/EwimvaTshirts/EwimvaTshirts';
import EwimvaVests from './screens/women/EwimvaVests/EwimvaVests';
import EwimvaPartyAndEvents from './screens/women/EwimvaPartyAndEvents/EwimvaPartyAndEvents';

// Men imports
import EwimvaBackpacksAndBags from './screens/men/BackpacksAndBags/EwimvaBackpacksAndBags';
import EwimvaCoatsMen from './screens/men/Coats/EwimvaCoats';
import EwimvaHoodies from './screens/men/Hoodies/EwimvaHoodies';
import EwimvaJacketsOuterwear from './screens/men/JacketsOuterwear/EwimvaJacketsOuterwear';
import EwimvaJeansMen from './screens/men/Jeans/EwimvaJeans';
import EwimvaPantsMen from './screens/men/Pants/EwimvaPants';
import EwimvaNewNowMen from './screens/men/NewNow/EwimvaNewNow';
import EwimvaShirtsMen from './screens/men/Shirts/EwimvaShirts';
import EwimvaShoesMen from './screens/men/Shoes/EwimvaShoes';
import EwimvaSuit from './screens/men/Suit/EwimvaSuit';
import EwimvaSweaters from './screens/men/Sweaters/EwimvaSweaters';
import EwimvaTshirtsMen from './screens/men/Tshirts/EwimvaTshirts';

import EwimvaClothes from './screens/EwimvaClothes/EwimvaClothes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EwimvaNewNow />} />
        <Route path="/new" element={<EwimvaNewNow />} />
        <Route path="/bags" element={<EwimvaBags />} />
        <Route path="/coats" element={<EwimvaCoatsWomen />} />
        <Route path="/dress" element={<EwimvaDress />} />
        <Route path="/fragrances" element={<EwimvaFragrances />} />
        <Route path="/jackets" element={<EwimvaJacketsWomen />} />
        <Route path="/jeans" element={<EwimvaJeansWomen />} />
        <Route path="/jumpers-and-cardigans" element={<EwimvaJumpersAndCardigans />} />
        <Route path="/pants" element={<EwimvaPantsWomen />} />
        <Route path="/shirts-and-blouses" element={<EwimvaShirtsAndBlouses />} />
        <Route path="/shoes" element={<EwimvaShoesWomen />} />
        <Route path="/tops" element={<EwimvaTops />} />
        <Route path="/tshirts" element={<EwimvaTshirtsWomen />} />
        <Route path="/vests" element={<EwimvaVests />} />
        <Route path="/party" element={<EwimvaPartyAndEvents />} />

        {/* New routes for men */}
        <Route path="/men/backpacks-and-bags" element={<EwimvaBackpacksAndBags />} />
        <Route path="/men/coats" element={<EwimvaCoatsMen />} />
        <Route path="/men/hoodies" element={<EwimvaHoodies />} />
        <Route path="/men/jackets-outerwear" element={<EwimvaJacketsOuterwear />} />
        <Route path="/men/jeans" element={<EwimvaJeansMen />} />
        <Route path="/men/pants" element={<EwimvaPantsMen />} />
        <Route path="/men/new" element={<EwimvaNewNowMen />} />
        <Route path="/men/shirts" element={<EwimvaShirtsMen />} />
        <Route path="/men/shoes" element={<EwimvaShoesMen />} />
        <Route path="/men/suit" element={<EwimvaSuit />} />
        <Route path="/men/sweaters" element={<EwimvaSweaters />} />
        <Route path="/men/tshirts" element={<EwimvaTshirtsMen />} />

        <Route path="/product/:id" element={<EwimvaClothes />} />
      </Routes>
    </BrowserRouter>
  );
  
}



export default App;