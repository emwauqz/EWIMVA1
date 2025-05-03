import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const GroupWrapperByAnima = (): JSX.Element => {
  // Define table headers
  const headers = ["РАЗМЕР", "ГРУДЬ", "ТАЛИЯ", "БЕДРА"];

  // Define table data for sizes and measurements
  const sizeData = [
    { size: "XXS", chest: "78", waist: "59", hips: "86" },
    { size: "XS", chest: "82", waist: "62", hips: "90" },
    { size: "S", chest: "86", waist: "66", hips: "94" },
    { size: "M", chest: "92", waist: "72", hips: "100" },
    { size: "L", chest: "98", waist: "78", hips: "106" },
    { size: "XL", chest: "104", waist: "85", hips: "112" },
    { size: "XXL", chest: "110", waist: "92", hips: "118" },
    { size: "1XL", chest: "116", waist: "99", hips: "124" },
    { size: "2XL", chest: "124", waist: "108", hips: "132" },
    { size: "3XL", chest: "132", waist: "117", hips: "140" },
    { size: "4XL", chest: "140", waist: "126", hips: "148" },
  ];

  return (
    <section className="w-full max-w-[1000px] mx-auto my-16">
      <h2 className="font-bold text-[#131313] text-[12.7px] mb-4 [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
        ТАБЛИЦА РАЗМЕРОВ
      </h2>

      <div className="border border-solid border-[#d7d7d8]">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead
                  key={index}
                  className="h-[46px] border border-solid border-[#d7d7d8] text-center"
                >
                  <div className="font-bold text-[#131313] text-[12.8px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
                    {header}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizeData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="h-[46px] border border-solid border-[#d7d7d8] text-center">
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px]">
                    {row.size}
                  </div>
                </TableCell>
                <TableCell className="h-[46px] border border-solid border-[#d7d7d8] text-center">
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.7px] tracking-[0] leading-[18px]">
                    {row.chest}
                  </div>
                </TableCell>
                <TableCell className="h-[46px] border border-solid border-[#d7d7d8] text-center">
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.7px] tracking-[0] leading-[18px]">
                    {row.waist}
                  </div>
                </TableCell>
                <TableCell className="h-[46px] border border-solid border-[#d7d7d8] text-center">
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.7px] tracking-[0] leading-[18px]">
                    {row.hips}
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
