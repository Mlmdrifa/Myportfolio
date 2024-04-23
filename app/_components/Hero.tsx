/* eslint-disable react/no-string-refs */
/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Code } from "./Code";
import {
  SiJavascript,
  SiTypescript,
  SiVite,
  SiMongodb,
  SiNetlify,
} from "react-icons/si";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[1] w-full p-4 flex flex-col gap-2 text-center md:text-left">
        <h2 className="font-caption text-5xl ">Drifa MALOUM</h2>
        <h3 className="text-3xl font-captiont text-gray-300 ">
          Développeuse React / React Native
        </h3>
        <p className="text-base">
          Développeuse web front-end spécialisée en
          <Link href={"https://reactnative.dev/"}>
            <Code className="text-white ">React Native.</Code>
          </Link>
          Mon parcours est axé sur la création d&apos;expériences utilisateur
          fluides et engageantes pour les applications mobiles. Mon expérience
          comprend la création d&apos;applications mobiles visant à offrir des
          expériences utilisateur fluides et captivantes.
        </p>
        <p className="mb-1 mt-1">Technologies que j&apos;utilise :</p>
        <span className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-0 md:space-y-2">
          <Code className=" text-white inline-flex items-center gap-1">
            <SiJavascript /> Javascript
          </Code>
          <Code className="text-white inline-flex items-center gap-1">
            <SiTypescript />
            Typescript
          </Code>
          <Code className="text-white inline-flex items-center gap-1">
            <SiVite />
            Vite
          </Code>
          <Code className="text-white inline-flex items-center gap-1">
            <SiMongodb />
            Mongodb
          </Code>
          <Code className="text-white inline-flex items-center gap-1">
            <SiNetlify />
            Netlify
          </Code>
        </span>
        N&apos;hésitez pas à explorer mes réalisations et à me contacter pour
        discuter de collaborations ou en savoir plus sur mes compétences
      </div>
      <div className="flex-[2] max:md-m-auto ml-auto">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQEK6Ohy0pCMRA/profile-displayphoto-shrink_400_400/0/1704585988656?e=1718236800&v=beta&t=G-pOosowLK12fU8zbl0oqp4h9STmiuxEjuhjvLK5CSg"
          className="w-26 max-w-xs md:max-w-56 rounded-full mx-auto md:ml-auto"
          alt="Image de Profil"
        />
      </div>
    </Section>
  );
};
