import { AnimatePresence, LayoutGroup } from "framer-motion";

import { SideMenuProvider } from "./context";
import { Home } from "./pages";

import "./app.css";

function App() {
  return (
    <>
      <LayoutGroup>
        <AnimatePresence>
          <SideMenuProvider>
            <Home />
          </SideMenuProvider>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default App;
