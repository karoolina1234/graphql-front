import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ApolloProviderComponent from "./ApolloProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ApolloProviderComponent>
    <App />
  </ApolloProviderComponent>
);
