// import React from "react";

// export const HeaderByAnima = (): JSX.Element => {
//   // Navigation links data
//   const leftNavLinks = [
//     { id: 1, text: "ЖЕНЩИНЫ", active: true },
//     { id: 2, text: "МУЖЧИНЫ", active: false },
//   ];

//   const rightNavLinks = [
//     { id: 1, text: "ИСКАТЬ", underlined: true },
//     { id: 2, text: "МОЙ АККАУНТ", underlined: false },
//     { id: 3, text: "ФАВОРИТЫ", underlined: false },
//   ];

//   return (
//     <header className="w-full h-14 bg-white">
//       <div className="relative w-full h-full flex items-center justify-between px-8">
//         {/* Left navigation */}
//         <div className="flex space-x-10">
//           {leftNavLinks.map((link) => (
//             <div key={link.id} className="relative">
//               <div className="font-bold text-[#131313] text-[12.7px] leading-[18px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
//                 {link.text}
//               </div>
//               {link.active && (
//                 <div className="absolute w-[75px] h-0.5 top-6 left-0 border-b [border-bottom-style:solid] border-[#131313]" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Logo */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 [font-family:'Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
//           EWIMVA
//         </div>

//         {/* Right navigation */}
//         <div className="flex space-x-6">
//           {rightNavLinks.map((link) => (
//             <div
//               key={link.id}
//               className="font-bold text-[#131313] text-[12.7px] leading-[18px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]"
//             >
//               <span className={link.underlined ? "underline" : ""}>
//                 {link.text}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };
