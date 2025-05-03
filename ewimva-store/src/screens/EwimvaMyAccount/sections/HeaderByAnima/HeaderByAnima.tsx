import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderByAnima = (): JSX.Element => {
  // Navigation items data for better maintainability
  const leftNavItems = [
    { text: "ЖЕНЩИНЫ", href: "#" },
    { text: "МУЖЧИНЫ", href: "#" },
  ];

  const rightNavItems = [
    { text: "ИСКАТЬ", href: "#" },
    { text: "МОЙ АККАУНТ", href: "#" },
    { text: "ФАВОРИТЫ", href: "#" },
  ];

  return (
    <header className="w-full h-14 bg-white">
      <div className="relative h-full flex items-center justify-between px-8">
        {/* Left navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-12">
            {leftNavItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="text-[#131313] text-[12.7px] font-bold font-['Inter',Helvetica] tracking-[0] leading-[18px]"
                >
                  {item.text}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 font-['Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
          EWIMVA
        </div>

        {/* Right navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {rightNavItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="text-[#131313] text-[12.7px] font-bold font-['Inter',Helvetica] tracking-[0] leading-[18px]"
                >
                  {item.text}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
