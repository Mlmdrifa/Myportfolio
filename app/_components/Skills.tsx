/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/badge";
import { Section } from "./Section";
import { SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { Code } from "./Code";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Comptétences</Badge>
      <h2 className=" pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        J'apprécie travailler avec les technologies suivantes :
      </h2>
      <div className="flex max-md:flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <TbBrandReactNative
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-xl font-bold dark:text-white ">React Native</h3>
          <p className="text-sm text-muted-foreground">
            Je travaille régulièrement avec <Code>ReactNative</Code> en
            utilisant <Code>TypeScript</Code> pour la plupart de mes projets.
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <SiTypescript size={42} />
          <h3 className="text-xl font-bold dark:text-white ">TypeScript</h3>
          <p className="text-sm text-muted-foreground">
            Je suis familière avec <Code>TypeScript</Code> et j'utilise
            également <Code>JavaScript</Code> dans mes projets
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <FaReact
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-xl font-bold dark:text-white ">React</h3>
          <p className="text-sm text-muted-foreground">
            Bien que <Code>React Native</Code> soit mon principal framework,
            j'utilise également <Code>React</Code> avec <Code>Next.js</Code>pour
            certaines applications
          </p>
        </div>
      </div>
    </Section>
  );
};
