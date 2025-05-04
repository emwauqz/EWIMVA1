// import React from "react";
// import { Separator } from "../../../../components/ui/separator";

// export const HeaderByAnima = (): JSX.Element => {
//   // Navigation links data
//   const mainNavLinks = [
//     { text: "ЖЕНЩИНЫ", active: true },
//     { text: "МУЖЧИНЫ", active: false },
//   ];

//   // Utility links data
//   const utilityLinks = [
//     { text: "ИСКАТЬ", underlined: true },
//     { text: "МОЙ АККАУНТ", underlined: false },
//     { text: "ФАВОРИТЫ", underlined: true },
//   ];

//   return (
//     <header className="w-full h-[130px] relative bg-transparent">
//       <div className="w-full h-14 bg-white relative">
//         <div className="container mx-auto h-full flex items-center justify-between">
//           {/* Left navigation */}
//           <div className="flex space-x-10 relative">
//             {mainNavLinks.map((link, index) => (
//               <div key={index} className="relative">
//                 <div className="font-bold text-[#131313] text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
//                   {link.text}
//                 </div>
//                 {link.active && (
//                   <Separator className="absolute w-[75px] h-0.5 -bottom-1 border-[#131313]" />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Center logo */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 [font-family:'Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
//             EWIMVA
//           </div>

//           {/* Right utility links */}
//           <div className="flex space-x-5 justify-end">
//             {utilityLinks.map((link, index) => (
//               <div
//                 key={index}
//                 className={`font-bold text-[#131313] text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap ${
//                   link.underlined ? "underline" : ""
//                 }`}
//               >
//                 {link.text}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <img
//         className="absolute w-2 h-[5px] bottom-0 left-[117px]"
//         alt="Vector"
//         src="/vector-1_favourite.svg"
//       />
//     </header>
//   );
// };
