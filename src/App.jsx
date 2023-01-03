import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader">🌀</h2>
            </div>
          }
        >
          <header>
            <Link to="/">Adopte me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Suspense>
      </AdoptedPetContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
