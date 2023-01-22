// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import cssText from "data-text:../styles/globals.css";

import type { PlasmoContentScript } from "plasmo";
import { useState } from "react";
import Form from "../components/Form";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const config: PlasmoContentScript = {
  matches: ["https://*/*", "https://*/*"],
};

// Inject into the ShadowDOM
export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText as string;
  return style;
};

const client = new QueryClient();

const GoogleSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
