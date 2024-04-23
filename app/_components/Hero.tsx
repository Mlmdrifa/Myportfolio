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
      <div className="flex-[3] w-full p-4 flex flex-col gap-2 text-center">
        <h2 className="font-caption text-5xl ">Drifa MALOUM</h2>
        <h3 className="text-3xl font-caption text-gray-300 ">
          Développeuse React / React Native
        </h3>
        <p className="text-base">
          Développeuse web front-end spécialisée en
          <Link href={"https://reactnative.dev/"}>
            <Code className="text-white ">React Native.</Code>
          </Link>
          Passionnée par la création d&apos;expériences fluides et captivantes
          pour les applications mobiles.
        </p>
        <p className="mb-1 mt-1 text-center md:text-left">
          Technologies que j&apos;utilise :
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          <Code className="text-white inline-flex items-center gap-1 mb-2 md:mb-0">
            <SiJavascript /> Javascript
          </Code>
          <Code className="text-white inline-flex items-center gap-1 mb-2 md:mb-0">
            <SiTypescript />
            Typescript
          </Code>
          <Code className="text-white inline-flex items-center gap-1 mb-2 md:mb-0">
            <SiVite />
            Vite
          </Code>
          <Code className="text-white inline-flex items-center gap-1 mb-2 md:mb-0">
            <SiMongodb />
            Mongodb
          </Code>
          <Code className="text-white inline-flex items-center gap-1 mb-2 md:mb-0">
            <SiNetlify />
            Netlify
          </Code>
        </div>
        N&apos;hésitez pas à explorer mes réalisations et à me contacter pour
        discuter de collaborations ou en savoir plus sur mes compétences
      </div>
      <div className="flex-[2] md:ml-auto md:mr-0 flex items-center justify-center w-80 h-80 rounded-full mx-auto">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQEK6Ohy0pCMRA/profile-displayphoto-shrink_400_400/0/1704585988656?e=1718236800&v=beta&t=G-pOosowLK12fU8zbl0oqp4h9STmiuxEjuhjvLK5CSg"
          className="rounded-full object-cover"
          alt="Image de Profil"
        />
      </div>
    </Section>
  );
};
