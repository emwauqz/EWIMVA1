// import React from "react";

// export const HeaderByAnima = (): JSX.Element => {
//   // Navigation links data for better maintainability
//   const leftNavLinks = [
//     { text: "ЖЕНЩИНЫ", id: "women" },
//     { text: "МУЖЧИНЫ", id: "men" },
//   ];

//   const rightNavLinks = [
//     { text: "ИСКАТЬ", id: "search" },
//     { text: "МОЙ АККАУНТ", id: "account" },
//     { text: "ФАВОРИТЫ", id: "favorites" },
//   ];

//   return (
//     <header className="w-full h-14 bg-white">
//       <div className="relative h-full max-w-[1920px] mx-auto flex items-center justify-between px-8">
//         {/* Left navigation */}
//         <nav className="flex space-x-12">
//           {leftNavLinks.map((link) => (
//             <a
//               key={link.id}
//               href={`#${link.id}`}
//               className="font-bold text-[#131313] text-[12.7px] font-['Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap"
//             >
//               {link.text}
//             </a>
//           ))}
//         </nav>

//         {/* Brand logo */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 font-['Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
//           EWIMVA
//         </div>

//         {/* Right navigation */}
//         <nav className="flex space-x-6">
//           {rightNavLinks.map((link) => (
//             <a
//               key={link.id}
//               href={`#${link.id}`}
//               className="font-bold text-[#131313] text-[12.7px] font-['Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap"
//             >
//               {link.text}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };
