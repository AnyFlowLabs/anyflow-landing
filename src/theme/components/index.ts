import { accordionTheme } from "./accordion";
import { alertTheme } from "./alert";
import { badgeTheme } from "./badge";
import { buttonTheme as Button } from "./button";
import { menuTheme } from "./menu";
import { stepperTheme } from "./stepper";
import { switchTheme } from "./switch";
import { tooltipTheme } from "./tooltip";

export const components = {
  Button,
  FormLabel: {
    baseStyle: {
      display: "flex",
      alignItems: "center",
      fontWeight: "normal",
      fontSize: "sm",
      gap: 2,
    },
  },
  Accordion: accordionTheme,
  Menu: menuTheme,
  Tooltip: tooltipTheme,
  Stepper: stepperTheme,
  Badge: badgeTheme,
  Switch: switchTheme,
  Alert: alertTheme,
};
