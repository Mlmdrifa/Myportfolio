/* eslint-disable @next/next/no-img-element */

import { Section } from "../../_components/Section";
import Header from "../../_components/Header";
import Connexion from "../beauty-service/images/connexion.png";
import Calendar from "../beauty-service/images/calendar.png";
import About from "../beauty-service/images/about.png";
import AboutTheme from "../beauty-service/images/aboutTheme.png";
import Home from "../beauty-service/images/home.png";
import Otp from "../beauty-service/images/otp.png";
import BestPro from "../beauty-service/images/bestPro.png";
import BestProTheme from "../beauty-service/images/bestProTheme.png";
import AvisTheme from "../beauty-service/images/avisTheme.png";
import Favoris from "../beauty-service/images/favoris.png";
import Logo from "../beauty-service/images/logo.png";
import Identifiant from "../beauty-service/images/identifiant.png";
import ProfilTheme from "../beauty-service/images/profilTheme.png";
import Signup from "../beauty-service/images/signup.png";
import { Spacing } from "@/app/_components/Spacing";
import Carousel from "@/app/_components/Carousel";

const images: { src: string }[] = [
  { src: Logo.src },
  { src: Signup.src },
  { src: Connexion.src },
  { src: Home.src },
  { src: AboutTheme.src },
  { src: About.src },
  { src: BestProTheme.src },
  { src: BestPro.src },
  { src: AvisTheme.src },
  { src: Calendar.src },
  { src: Favoris.src },
  { src: Identifiant.src },
  { src: ProfilTheme.src },
  { src: Otp.src },
];

export default function BeautyServicesScreens() {
  return (
    <>
      <Header />
      <Spacing size="sm" />
      <Section>
        <div className=" flex justify-center">
          <h3 className=" flex justify-center items-center font-caption text-5xl text-primary">
            <Spacing size="md" />
            Beauty service
          </h3>
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
