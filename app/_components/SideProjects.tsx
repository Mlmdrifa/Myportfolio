import {
  Bed,
  ChefHat,
  Gamepad,
  Handshake,
  LucideIcon,
  Move,
} from "lucide-react";

import Link from "next/link";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Handshake,
    title: "Beauty Service",
    description: "Application mobile dédiée aux services de beauté.",
    href: "/beauty-service",
  },
  {
    Logo: ChefHat,
    title: "Smart Menu",
    description:
      "Restaurants à proximité en fonction des préférences alimentaires.",
    href: "/smart-menu",
  },
  {
    Logo: Move,
    title: "MovoO",
    description: "Move, meet & repeat",
    href: "/movoo",
  },

  {
    Logo: Bed,
    title: "Réplique Airbnb",
    description:
      "Vinted est une plateforme en ligne de vente, d'achat et d'échange de vêtements d'occasion",
    href: "/",
  },
  {
    Logo: Gamepad,
    title: "Réplique Game-Pad",
    description: "Site Web qui offre une base de données sur les jeux vidéo",
    href: "/",
  },
];

export const SideProject = (props: SideProjectProps) => {
  const { Logo, title, description, href } = props;

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-4 hover:bg-accent/40 transitions-colors p-2 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded outline-dashed outline-2 outline-offset-2">
        <Logo size={16} />
      </span>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};
