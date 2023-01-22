import iconBase64 from "data-base64:~assets/icon.png";
// import cssText from "data-text:./google-sidebar.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cssText from "data-text:../styles/globals.css";

import type { PlasmoContentScript } from "plasmo";
import { useEffect, useState } from "react";
import Form from "../components/Form";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Inject to the webpage itself
// import "../styles/globals.css";
// import "./google-sidebar-base.css";

export const config: PlasmoContentScript = {
  matches: ["http://*/*"],
};

// Inject into the ShadowDOM
export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText as string;
  return style;
};

// export const getShadowHostId = () => "plasmo-google-sidebar";
const client = new QueryClient();

const GoogleSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   document.body.classList.toggle("plasmo-google-sidebar-show", isOpen);
  // }, [isOpen]);

  return (
    <QueryClientProvider client={client}>
      {isOpen ? (
        <div className="fixed bottom-2 right-2">
          <Form onClose={() => setIsOpen(false)} />
        </div>
      ) : (
        <button
          className="fixed bottom-2 right-2 rounded-full bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 p-0.5"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src="https://reworkd.ai/apple-touch-icon.png"
            height={32}
            width={32}
            alt="Reworkd"
            className="rounded-full"
          />
        </button>
      )}
    </QueryClientProvider>
  );
};

export default GoogleSidebar;
