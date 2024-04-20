"use client";

/* eslint-disable @next/next/no-img-element */
import Carousel from "@/app/_components/Carousel";

import { Section } from "../../_components/Section";
import Header from "../../_components/Header";
import Notif from "../movoo/images/notification.png";
import Otp from "../movoo/images/otp.png";
import Profil from "../movoo/images/profil.png";
import { Spacing } from "@/app/_components/Spacing";
import { STACKS, Stack } from "@/app/_components/Stacks";
import { Card } from "@/app/_components/Card";

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
        <div className=" flex justify-center">
          <h2 className="font-caption text-5xl text-white">MovoO</h2>
          <Spacing size="md" />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-80 h-80">
            <Carousel items={images} />
          </div>
          <div>
            <div className="flex-[2] w-full flex flex-col gap-4 pl-9">
              <Spacing size="sm" />

              <Card className="p-4 max-w-[300px]">
                <p className="text-lg text-muted-foreground text-white flex justify-center">
                  Stacks
                </p>
                <div className="flex flex-col gap-1  text-zinc-400">
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
