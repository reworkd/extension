import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Form from "../components/Form";

const client = new QueryClient();

function IndexPopup() {
  return (
    <QueryClientProvider client={client}>
      <Form />
    </QueryClientProvider>
  );
}

export default IndexPopup;
