import { Badge } from "@/app/_components/Badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className=" flex flex-col items-start gap-4 w-full">
      <Badge variant="outline">me contacter</Badge>
      <h2 className=" pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Travailler avec moi
      </h2>
      <div className="flex max-md:flex-col gap-7 flex-1">
        <ContactCard
          className="flex-1"
          name="Drifa Maloum"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAehd8zTbzJ8V_VglKpq7m_ZUU1evK3etVhA&s"
          }
          url="https://www.linkedin.com/in/drifa-maloum/"
          mediumImage={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          }
        />
        <ContactCard
          className="flex-1"
          url="mailto:maloum.drifaa@gmail.com"
          image="data:image/png;base64,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"
          mediumImage="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png"
          description="N'hésitez pas à me contacter pour en savoir plus"
        />
      </div>
    </Section>
  );
};
