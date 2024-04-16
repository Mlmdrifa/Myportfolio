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
          <h2 className="font-caption text-5xl text-primary">Smart Menu</h2>
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
