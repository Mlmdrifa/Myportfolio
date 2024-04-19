/* eslint-disable @next/next/no-img-element */

import { ContactCard } from "./ContactCard";
import { WORKS, Work } from "./Work";

import { Section } from "./Section";
import { SIDE_PROJECTS, SideProject } from "./SideProjects";
import { Card } from "@/components/card";

export default function Projects() {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Mes projets</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                href={project.href}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Expériences</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>

        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Me contacter</p>
          <ContactCard
            image={
              "https://media.licdn.com/dms/image/D4E03AQEK6Ohy0pCMRA/profile-displayphoto-shrink_400_400/0/1704585988656?e=1718236800&v=beta&t=G-pOosowLK12fU8zbl0oqp4h9STmiuxEjuhjvLK5CSg"
            }
            mediumImage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            }
            name={"Drifa Maloum"}
            url={"https://www.linkedin.com/in/drifa-maloum-077b362a4/".toString()}
          />
        </Card>
      </div>
    </Section>
  );
}
