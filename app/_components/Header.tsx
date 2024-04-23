import { buttonVariants } from "@/app/_components/Button";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Section } from "./Section";
import Link from "next/link";

export default function Header() {
  return (
    <header className="top-0 py-3 mt-3">
      <Section className="max-w-3xl px-4 flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-lg font-bold text-foreground no-underline hover:underline">
            Drifa.M
          </h1>
        </Link>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <a
            href="https://github.com/Mlmdrifa"
            className={cn(buttonVariants, { variant: "outline" }, "size-6 p-0")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="text-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/drifa-maloum-077b362a4/"
            className={cn(buttonVariants, { variant: "outline" }, "size-6 p-0")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="text-foreground" />
          </a>
        </ul>
      </Section>
    </header>
  );
}
