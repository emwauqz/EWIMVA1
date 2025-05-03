import React from "react";

// Define data structure for care instructions
const careInstructions = [
  {
    category: "Стирка",
    items: [
      {
        icon: "/b-svg.svg",
        description:
          "Машинная стирка. Значения 30° C, 40° C, 60° C, 95° C указывают максимальную температуру стирки.",
      },
      {
        icon: "/e-svg-1.svg",
        description:
          "Машинная стирка с обычной программой и коротким отжимом. Значения 30º C, 40º C, 60º C, 95º C указывают максимальную температуру стирки.",
      },
      {
        icon: "/c-svg-1.svg",
        description:
          "Ручная стирка при максимальной температуре 30º C. Не трите и не выжимайте.",
      },
      {
        icon: "/d-svg-1.svg",
        description: "Не стирать.",
      },
    ],
  },
  {
    category: "Использование отбеливателя",
    items: [
      {
        icon: "/g-svg.svg",
        description: "Можно использовать отбеливатель.",
      },
      {
        icon: "/h-svg.svg",
        description: "Не отбеливать.",
      },
    ],
  },
  {
    category: "Глажка",
    items: [
      {
        icon: "/f-svg.svg",
        description:
          "Гладить при высокой температуре: максимум 200º C. Хлопок, лен и вискоза.",
      },
      {
        icon: "/e-svg.svg",
        description:
          "Гладить при средней температуре: максимум 150º C. Смесь шерсти и полиэстера.",
      },
      {
        icon: "/d-svg.svg",
        description:
          "Гладить при низкой температуре: максимум 110º C. Смесь шерсти и полиэстера. Натуральный шелк, вискоза, ацетат и акрил.",
      },
      {
        icon: "/c-svg.svg",
        description: "Не гладить.",
      },
    ],
  },
  {
    category: "Только сухая чистка.",
    items: [
      {
        icon: "/j-svg.svg",
        description:
          "Буквы A, F, P в кружках указывают на тип продукта, подходящего для каждой одежды (полезная информация для специалистов химчистки).",
      },
      {
        icon: "/k-svg.svg",
        description: "Не подвергать сухой чистке.",
      },
    ],
  },
  {
    category: "Сушка",
    items: [
      {
        icon: "/t-svg.svg",
        description: "Можно сушить в сушильной машине.",
      },
      {
        icon: "/u-svg.svg",
        description: "Не сушить в сушильной машине.",
      },
      {
        icon: "/v-svg.svg",
        description: "Сушить при низкой температуре.",
      },
      {
        icon: "/w-svg.svg",
        description: "Сушить в сушильной машине при нормальной температуре.",
      },
    ],
  },
];

export const GroupByAnima = (): JSX.Element => {
  return (
    <section className="w-full max-w-[708px] mx-auto py-8">
      <h2 className="text-[15px] leading-5 font-bold text-[#131313] mb-8">
        КАК УХАЖИВАТЬ ЗА ОДЕЖДОЙ?
      </h2>

      <div className="space-y-10">
        {careInstructions.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h3 className="text-[12.2px] leading-[18px] font-bold text-[#131313]">
              {category.category}
            </h3>

            <div className="space-y-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start">
                  <div className="w-[42px] h-6 relative flex-shrink-0">
                    <div className="relative h-6">
                      <img
                        className="absolute h-6 top-0 left-1/2 transform -translate-x-1/2"
                        alt={`Care symbol ${categoryIndex}-${itemIndex}`}
                        src={item.icon}
                      />
                    </div>
                  </div>
                  <p className="text-[11.9px] leading-[18px] font-normal text-[#131313] ml-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
