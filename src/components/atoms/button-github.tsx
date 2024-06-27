import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import GithubBlackIcon from "@/assets/github_black.svg";
import Icon from "@/components/atoms/icon";

export interface ButtonGithubProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string;
}

// [TODO] -> Verificar para onde enviar

export default function ButtonGithub({
  url,
  className,
  children,
  ...props
}: ButtonGithubProps) {
  const { t } = useTranslation();

  return (
    <a
      className={cn(
        "rounded-lg bg-white px-4 flex items-center text-blue-1 text-sm leading-6 font-semibold",
        className,
      )}
      href={url}
      target="_blank"
      {...props}
    >
      <Icon
        src={GithubBlackIcon}
        alt="Github"
        url={"https://github.com/AnyFlowLabs"}
        className="mr-3 text-black"
      />
      <span>
        {t("header.button_github")}
      </span>
    </a>
  );
}
