import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./styles/custom.css"
import shopContextProvider from "./context/ShopContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <shopContextProvider>
      <App />
    </shopContextProvider>
  </StrictMode>
)
