import Intercom from "@intercom/messenger-js-sdk";
import { Providers } from "./providers";

export default function App() {
  Intercom({
    app_id: "ovcuu4sd",
  });

  return <Providers />;
}
