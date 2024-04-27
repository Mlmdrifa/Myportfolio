/* eslint-disable @next/next/no-img-element */

import { Section } from "../../_components/Section";
import Header from "../../_components/Header";
import Carousel from "@/app/_components/Carousel";
import { Spacing } from "@/app/_components/Spacing";
import { Card } from "@/app/_components/Card";
import { STACKS, Stack } from "@/app/_components/Stacks";

import Email from "../../(screens)/smart-menu/images/email.png";
import Login from "../smart-menu/images/login.png";
import Otp from "../smart-menu/images/Otp.png";
import Signup from "../smart-menu/images/signup.png";
import Start from "../smart-menu/images/start.png";

const images: { src: string }[] = [
  {
    src: Login.src,
  },
  {
    src: Start.src,
  },
  {
    src: Signup.src,
  },
  {
    src: Email.src,
  },
  {
    src: Otp.src,
  },
];

export default function SmartMenuScreen() {
  return (
    <>
      <Header />
      <Spacing size="sm" />
      <Section>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-caption text-5xl text-purple-300">Smart Menu</h2>
          <Spacing size="sm" />
        </div>
        <div className="w-full flex justify-center grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-lg">
          <div className="flex justify-center">
            <div className=" md:w-4/5 lg:w-3/4 xl:w-2/3 ">
              <Carousel items={images} />
            </div>
          </div>
          <div>
            <div className="flex-[2] w-full flex flex-col gap-4 items-center md:items-start md:mx-auto md:mr-0">
              <Spacing size="sm" />
              <Card className="p-4 max-w-[300px] mx-auto md:mx-0">
                <p className="text-lg text-muted-foreground text-white flex justify-center justify-start mb-1">
                  Stacks
                </p>
                <div className="flex flex-col gap-1 text-purple-300 justify-center md:justify-start">
                  {STACKS.map((stack, index) => (
                    <Stack key={index} {...stack} />
                  ))}
                </div>
              </Card>
              <Spacing size="sm" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
