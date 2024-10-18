import Root from "@/components/molecules/root";

import HomePage from "./pages/Home";
import Intercom from "@intercom/messenger-js-sdk";

export default function App() {
  Intercom({
    app_id: 'ovcuu4sd',
  });

  return (
    <Root>
      <HomePage />
    </Root>
  );
}
