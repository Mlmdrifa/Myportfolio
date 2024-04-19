/* eslint-disable @next/next/no-img-element */

import { Section } from "../../_components/Section";
import Header from "../../_components/Header";
import Email from "../../(screens)/smart-menu/images/email.png";
import Login from "../smart-menu/images/login.png";
import Otp from "../smart-menu/images/otp.png";
import Signup from "../smart-menu/images/signup.png";
import { Spacing } from "@/app/_components/Spacing";
import Carousel from "@/app/_components/Carousel";
import Start from "../smart-menu/images/start.png";
import { Card } from "@/components/card";
import { STACKS, Stack } from "@/app/_components/Stacks";

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
        <div className=" flex justify-center">
          <h2 className="font-caption text-5xl text-purple-300">Smart Menu</h2>
          <Spacing size="md" />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-80 h-90">
            <Carousel items={images} />
          </div>
          <div>
            <div className="flex-[2] w-full flex flex-col gap-4 pl-9">
              <Spacing size="sm" />
              <Card className="p-4 max-w-[300px]">
                <p className="text-lg text-muted-foreground text-white flex justify-center">
                  Stacks
                </p>
                <div className="flex flex-col gap-1 text-purple-300">
                  {STACKS.map((stack, index) => (
                    <Stack key={index} {...stack} />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
