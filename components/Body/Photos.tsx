import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cardData = [
  { id: 0, title: "Your title", subTitle: "your subtitle" },
  { id: 1, title: "Your title", subTitle: "your subtitle" },
  { id: 2, title: "Your title", subTitle: "your subtitle" },
  { id: 3, title: "Your title", subTitle: "your subtitle" },
  { id: 4, title: "Your title", subTitle: "your subtitle" },
  { id: 5, title: "Your title", subTitle: "your subtitle" },
];
const Photos = () => {
  return (
    <section className="flex flex-wrap md:px-[16rem] py-10 gap-8 gap-y-5 md:gap-x-5 lg:gap-x-[10rem] justify-center md:gap-y-10">
      {cardData.map((data) => (
        <Card className="w-fit p-4" key={data.id}>
          <CardContent>
            <div className="h-[10rem] w-[8rem] md:h-[13rem] md:w-[11rem] bg-primary rounded-sm"></div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-0 py-2">
            <p className="font-medium text-foreground text-[1rem]">{data.title}</p>
            <p className="text-muted-foreground text-[11.108px] w[2rem]">{data.subTitle}</p>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default Photos;
