import Heading from "@/components/atoms/heading";
import Paragraph from "@/components/atoms/paragraph";

export interface TextSectionProps {
  title: string;
  description: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, description }) => (
  <div className="flex w-full flex-col items-center justify-between text-center lg:flex-row lg:text-left">
    <Heading text={title} className="max-w-[378px] text-[32px] text-white" />
    <div className="max-w-[693px] px-[20px] py-[30px]">
      <Paragraph text={description} />
    </div>
  </div>
);

export default TextSection;
