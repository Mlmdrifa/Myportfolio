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
  SiTailwindcss,
} from "react-icons/si";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-4">
      <div className="flex-1 max-w-3xl p-4 flex flex-col items-center gap-4 text-center mx-auto">
        <h2 className="font-caption text-5xl">Drifa MALOUM</h2>
        <h3 className="text-3xl font-caption text-gray-300">
          Développeuse Fullstack web et mobile
        </h3>
        <p className="text-base">
          Avec une expérience dans le développement d&apos;applications
          réactives et performantes.
          <br /> Mon parcours est axé sur l&apos;innovation technologique et la
          recherche de solutions créatives pour surmonter divers défis
          techniques. Je travaille sur des projets fullstack, intégrant des
          technologies modernes pour garantir une expérience utilisateur fluide
          et efficace. Mon approche consiste à explorer continuellement de
          nouvelles méthodes et outils pour améliorer la qualité et la
          fonctionnalité des applications.
        </p>
        <p className="mb-1 mt-1">Technologies que j&apos;utilise :</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Code className="text-white inline-flex items-center gap-1 mb-2">
            <SiJavascript /> Javascript
          </Code>
          <Code className="text-white inline-flex items-center gap-1 mb-2">
            <SiTypescript />
            Typescript
          </Code>
          <Code className="text-white inline-flex items-center gap-1 mb-2">
            <SiVite />
            Vite
          </Code>
          <Code className="text-white inline-flex items-center gap-1 mb-2">
            <SiMongodb />
            Mongodb
          </Code>
          <Code className="text-white inline-flex items-center gap-1 mb-2">
            <SiNetlify />
            Netlify
          </Code>
          <Code className="text-white inline-flex items-center gap-1 mb-2">
            <SiTailwindcss />
            Tailwind
          </Code>
        </div>
        N&apos;hésitez pas à explorer et à me contacter pour collaborer ou en
        savoir plus.
      </div>
    </Section>
  );
};
