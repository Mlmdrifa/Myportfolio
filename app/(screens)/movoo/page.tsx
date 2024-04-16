"use client";

/* eslint-disable @next/next/no-img-element */
import Carousel from "@/app/_components/Carousel";

import { Section } from "../../_components/Section";
import Header from "../../_components/Header";
import Notif from "../movoo/images/notification.png";
import Otp from "../movoo/images/otp.png";
import Profil from "../movoo/images/profil.png";
import { Spacing } from "@/app/_components/Spacing";

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
          <h2 className="font-caption text-5xl text-primary">MovoO</h2>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-80 h-90">
            <Carousel items={images} />
          </div>
        </div>
      </Section>
    </>
  );
}
