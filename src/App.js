// Main application component that manages routing and page rendering
import { useRoutes } from "react-router-dom";
import { Suspense, useContext } from "react";
import { ThemeProvider } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import routes from "./routes";
import { LanguageContext } from "./LanguageContext";
import { PageProvider } from "./context/PageContext";

function App() {
  const { direction } = useContext(LanguageContext);
  const router = useRoutes(routes);

  return (
    <HelmetProvider>
      <PageProvider>
        <ThemeProvider dir={direction}>
          <div style={{ direction }}>
            <Suspense fallback={<h1>Loading...</h1>}>{router}</Suspense>
          </div>
        </ThemeProvider>
      </PageProvider>
    </HelmetProvider>
  );
}

export default App;
