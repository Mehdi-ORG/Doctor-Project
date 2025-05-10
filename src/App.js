import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);

  return (
    <Suspense fallback={<h1>در حال بارگذاری...</h1>}>
      {router}
    </Suspense>
  );

}

export default App;
