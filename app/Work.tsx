/* eslint-disable @next/next/no-img-element */

import { Badge } from "@/components/badge";
import Link from "next/link";

export const WORKS: WorkProps[] = [
  {
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    title: "Aks Digital Hub",
    role: "Dev React Native",
    url: "https://github.com/AKS-Digital-Hub/beauty-service",
    date: "2023-Present",
    formation: true,
  },
  {
    image: "https://www.lereacteur.io/logo-le-reacteur-2.png",
    title: "Le Reacteur",
    role: "Bootcamp",
    url: "https://apollo.lereacteur.io/",
    date: "2023-Present",
    formation: true,
  },
  {
    image:
      "https://www.education.gouv.fr/sites/default/files/site_logo/2024-02/logoMENJ_tronque.png",
    title: "Education nationale",
    role: "Accompagnant d'élèves en situation de handicap",
    url: "https://www.education.gouv.fr/",
    date: "2020-2023",
  },
];
export type WorkProps = {
  image?: string;
  title: string;
  role: string;
  date: string;
  url?: string;
  formation?: boolean;
};
export const Work = (props: WorkProps) => {
  const { image, title, date, role } = props;
  return (
    <Link
      href={props.url}
      className=" inline-flex items-center gap-4 hover:bg-accent/40 transitions-colors p-2 rounded"
    >
      <div className="flex items-center gap-2 justify-around ">
        <img
          src={image}
          alt={title}
          className="w-6 h-6 object-contain rounded-md"
        />

        <div className="flex flex-col">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs  text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="ml-auto flex-1 text-end ">
        {props.formation && <Badge variant="outline">Alternance</Badge>}
        <p className="text-xs text-end text-muted-foreground ">{date}</p>
      </div>
    </Link>
  );
};
