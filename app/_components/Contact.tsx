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
            "https://media.licdn.com/dms/image/D4E03AQEK6Ohy0pCMRA/profile-displayphoto-shrink_400_400/0/1704585988656?e=1718236800&v=beta&t=G-pOosowLK12fU8zbl0oqp4h9STmiuxEjuhjvLK5CSg"
          }
          url="https://www.linkedin.com/in/drifa-maloum-077b362a4/"
          mediumImage={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          }
        />
        <ContactCard
          className="flex-1"
          url="mailto:maloum.drifaa@gmail.com"
          image="https://media.licdn.com/dms/image/D4E03AQEK6Ohy0pCMRA/profile-displayphoto-shrink_400_400/0/1704585988656?e=1718236800&v=beta&t=G-pOosowLK12fU8zbl0oqp4h9STmiuxEjuhjvLK5CSg"
          mediumImage="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png"
          description="N'hésitez pas à me contacter pour en savoir plus"
        />
      </div>
    </Section>
  );
};
