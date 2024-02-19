"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  
const cardData = [
  { id: 0, title: "Web Development", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque " },
  { id: 1, title: "UX Designs", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque  " },
  { id: 2, title: "UX Designs", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque " },
  { id: 3, title: "Digital Strategy", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque " },
  { id: 4, title: "Design Concept", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque " },
  { id: 5, title: "Social Media", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque " },
];
  return (
    <div >
      <div className="px-[8px]">
        <h1 className="font-bold text-[3rem]">Services</h1>
      </div>
      <div className="px-[8px]">
        <p className="text-[12px]">OUR SERVICES FOR CLIENTS</p>
      </div>
      <div className="flex justify-center flex-wrap bg-green-600 p-3 gap-5 items-center h-[110vh] w-set">
      {cardData.map((data) => (
        <Card className=" p-2 bg-black md:w-[25%] w-[33%] md:h-[40%] h-[30%]" key={data.id}>
          <CardContent className="">
            {/* <div className="h-[10rem] w-[8rem] md:h-[13rem] md:w-[11rem] bg-primary rounded-sm"></div> */}
            <p className="font-medium text-foreground text-[1rem] text-white ">{data.title}</p>
            <p className="text-muted-foreground text-[11.108px] text-white">{data.subTitle}</p>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-0 py-2">
          </CardFooter>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default page;
