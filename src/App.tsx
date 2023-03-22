import Routers from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./styles/globals";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routers />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
