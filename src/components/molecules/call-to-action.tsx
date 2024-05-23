import Heading from "@/components/atoms/heading";
import ButtonAccess from "@/components/atoms/button-access";
import BUTTON_ACCESS from "@/data/button-access";

const CallToAction = () => (
  <div className="flex flex-col items-center gap-6">
    <Heading text=" Try it right now! Click the button to be one of the first users." />
    <ButtonAccess url={BUTTON_ACCESS}>Request access</ButtonAccess>
  </div>
);

export default CallToAction;
