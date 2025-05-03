import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const DivWrapperByAnima = (): JSX.Element => {
  // Define table headers
  const headers = ["CN", "DE", "EUR", "FR", "GB", "IT", "KR", "MEX", "US"];

  // Define table data for size conversions
  const sizeData = [
    {
      cn: "XS-155/78A",
      de: "XXS",
      eur: "XXS",
      fr: "XXS",
      gb: "4",
      it: "XXS",
      kr: "44",
      mex: "EECH",
      us: "0",
    },
    {
      cn: "S-155/80A",
      de: "XS",
      eur: "XS",
      fr: "XS",
      gb: "6",
      it: "XS",
      kr: "44,5",
      mex: "ECH",
      us: "2",
    },
    {
      cn: "M-160/84A",
      de: "S",
      eur: "S",
      fr: "S",
      gb: "8",
      it: "S",
      kr: "55",
      mex: "CH",
      us: "4",
    },
    {
      cn: "L-165/88A",
      de: "M",
      eur: "M",
      fr: "M",
      gb: "10",
      it: "M",
      kr: "55,5",
      mex: "M",
      us: "6",
    },
    {
      cn: "XL-170/92A",
      de: "L",
      eur: "L",
      fr: "L",
      gb: "12",
      it: "L",
      kr: "66",
      mex: "G",
      us: "8",
    },
    {
      cn: "XXL-175/96A",
      de: "XL",
      eur: "XL",
      fr: "XL",
      gb: "14",
      it: "XL",
      kr: "77",
      mex: "EG",
      us: "10",
    },
    {
      cn: "3XL-175/100A",
      de: "XXL",
      eur: "XXL",
      fr: "XXL",
      gb: "16",
      it: "XXL",
      kr: "88",
      mex: "EEG",
      us: "12",
    },
    {
      cn: "",
      de: "1XL",
      eur: "1XL",
      fr: "1XL",
      gb: "20",
      it: "1XL",
      kr: "",
      mex: "1EG",
      us: "14",
    },
    {
      cn: "",
      de: "2XL",
      eur: "2XL",
      fr: "2XL",
      gb: "22",
      it: "2XL",
      kr: "",
      mex: "2EG",
      us: "16",
    },
    {
      cn: "",
      de: "3XL",
      eur: "3XL",
      fr: "3XL",
      gb: "24",
      it: "3XL",
      kr: "",
      mex: "3EG",
      us: "18",
    },
    {
      cn: "",
      de: "4XL",
      eur: "4XL",
      fr: "4XL",
      gb: "26",
      it: "4XL",
      kr: "",
      mex: "4EG",
      us: "20",
    },
  ];

  return (
    <section className="w-full max-w-[1002px] mx-auto my-8">
      <h2 className="text-[12.7px] leading-[18px] font-bold text-[#131313] tracking-[0] whitespace-nowrap mb-4 font-sans">
        СООТВЕТСТВИЕ МЕЖДУНАРОДНЫХ РАЗМЕРОВ
      </h2>

      <div className="w-full border border-solid border-[#d7d7d8]">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead
                  key={index}
                  className="h-10 border border-solid border-[#d7d7d8] text-center p-0"
                >
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {header}
                    </span>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizeData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell className="h-10 border border-solid border-[#d7d7d8] text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[12.5px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {row.cn}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="h-10 border border-solid border-[#d7d7d8] text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {row.de}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="h-10 border border-solid border-[#d7d7d8] text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {row.eur}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="h-10 border border-solid border-[#d7d7d8] text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {row.fr}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="h-10 border border-solid border-[#d7d7d8] text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {row.gb}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="h-10 border border-solid border-[#d7d7d8] text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {row.it}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="h-10 border border-solid border-[#d7d7d8] text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {row.kr}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="h-10 border border-solid border-[#d7d7d8] text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {row.mex}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="h-10 border border-solid border-[#d7d7d8] text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                      {row.us}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
