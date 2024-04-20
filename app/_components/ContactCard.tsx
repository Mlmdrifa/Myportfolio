/* eslint-disable @next/next/no-img-element */

import { Card } from "./Card";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name?: string;
  description?: string;
  url: string | URL;
  className?: string;
}) => {
  const { image, mediumImage, name, description, url, className } = props;
  const urlStr = typeof url === "string" ? url : url.toString();

  return (
    <a
      href={urlStr}
      className={cn("w-full ", props.className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="p-3 bg-accent/10 flex hover:bg-accent/30 transitions-colors group items-center gap-4">
        <div className="relative h-10">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={mediumImage}
            alt={name}
            className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-contain "
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">{name}</p>
          </div>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
          size={16}
        />
      </Card>
    </a>
  );
};
