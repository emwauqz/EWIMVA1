import React from "react";
import { Link } from "react-router-dom";
import { ElementByAnima } from "./sections/ElementByAnima";
import { ElementWrapperByAnima } from "./sections/ElementWrapperByAnima";
import Header from '../../components/Header';
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";
import Footer from "../../components/Footer";


export const EwimvaHome = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="1:18"
    >
      <nav className="bg-gray-800 p-4 w-full">
        <ul className="flex flex-wrap justify-center space-x-4 text-white">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/men">Мужская одежда</Link></li>
          <li><Link to="/login">Войти</Link></li>
          <li><Link to="/register">Регистрация</Link></li>
          <li><Link to="/favourites">Избранное</Link></li>
          <li><Link to="/search">Поиск</Link></li>
          <li><Link to="/new">Новинки</Link></li>
          <li><Link to="/product">Товар</Link></li>
          <li><Link to="/account">Мой аккаунт</Link></li>
          <li><Link to="/details">Детали</Link></li>
          <li><Link to="/recovery">Восстановление пароля</Link></li>
          <li><Link to="/help">Помощь</Link></li>
          <li><Link to="/users">Пользователи</Link></li>
          <li><Link to="/products">Товары</Link></li>
          <li><Link to="/orders">Заказы</Link></li>
          <li><Link to="/dashboard">Дашборд</Link></li>
        </ul>
      </nav>

      <div className="bg-white w-full max-w-[1920px] overflow-hidden relative">
        <div className="w-full">
          <Header />
          <ElementByAnima />
        </div>

        <ElementWrapperByAnima />
        <OverlapWrapperByAnima />
        <Footer />
      </div>
    </div>
  );
};

export default EwimvaHome;


// import React from "react";
// import { ElementByAnima } from "./sections/ElementByAnima";
// import { ElementWrapperByAnima } from "./sections/ElementWrapperByAnima";
// import { HeaderByAnima } from "./sections/HeaderByAnima";
// import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";
// import { ViewByAnima } from "./sections/ViewByAnima/ViewByAnima";

// export const EwimvaHome = (): JSX.Element => {
//   return (
//     <div
//       className="bg-white flex flex-col items-center w-full"
//       data-model-id="1:18"
//     >
//       <div className="bg-white w-full max-w-[1920px] overflow-hidden relative">
//         <div className="w-full">
//           <HeaderByAnima />
//           <ElementByAnima />
//         </div>

//         <ElementWrapperByAnima />
//         <OverlapWrapperByAnima />
//         <ViewByAnima />
//       </div>
//     </div>
//   );
// };
