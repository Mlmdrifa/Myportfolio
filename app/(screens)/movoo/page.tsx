"use client";

/* eslint-disable @next/next/no-img-element */
import Carousel from "@/app/_components/Carousel";
import { Section } from "../../_components/Section";
import Header from "../../_components/Header";
import { Spacing } from "@/app/_components/Spacing";
import { STACKS, Stack } from "@/app/_components/Stacks";
import { Card } from "@/app/_components/Card";

import Notif from "../movoo/images/notification.png";
import Otp from "../movoo/images/otp.png";
import Profil from "../movoo/images/profil.png";

const images: { src: string }[] = [
  {
    src: Profil.src,
  },
  {
    src: Otp.src,
  },
  {
    src: Notif.src,
  },
];

export default function MovoOScreen() {
  return (
    <>
      <Header />
      <Spacing size="sm" />
      <Section>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-caption text-5xl text-white">MovoO</h3>
          <Spacing size="sm" />
        </div>
        <div className="w-full flex justify-center grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-lg">
          <div className="flex justify-center">
            <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
              <Carousel items={images} />
            </div>
          </div>
          <div>
            <div className="flex-[2] w-full flex flex-col gap-4 pl-9 ">
              <Spacing size="sm" />
              <Card className="p-4 max-w-[300px] mx-auto md:mx-0">
                <p className="text-lg text-muted-foreground text-white flex justify-center mb-1">
                  Stacks
                </p>

                <div className="flex flex-col gap-1  text-zinc-400">
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
