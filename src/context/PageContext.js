import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageContext = createContext();

export function PageProvider({ children }) {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <PageContext.Provider value={{ currentPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  return useContext(PageContext);
}
