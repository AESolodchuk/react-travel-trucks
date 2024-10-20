//#region Common import
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//#endregion Common import

//#region Pages
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));
const CatalogPage = lazy(() => "./pages/CatalogPage/CatalogPage");
const NotFoundPage = lazy(() => "./pages/NotFoundPage/NotFoundPage");
//#endregion Pages

//#region Components
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const Features = lazy(() => import("./components/Features/Features"));
//#endregion Components

//#region Application
function App() {
  <Suspense fallback="Loading...">
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="catalog/:id" element={<CamperPage />}>
        <Route path="Reviews" element={<Reviews />} />
        <Route path="Features" element={<Features />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>;
}
//#endregion Application

export default App;
