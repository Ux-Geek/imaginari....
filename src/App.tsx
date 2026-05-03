import { Routes, Route } from "react-router-dom";
import { NewHome } from "./pages/NewHome";
import { About } from "./pages/About";
import { BrandDirectory } from "./pages/BrandDirectory";
import { BrandPage } from "./pages/BrandPage";
import { ProductPage } from "./pages/ProductPage";
import { StoryPage } from "./pages/StoryPage";
import { StoryDetail } from "./pages/StoryDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NewHome />} />
      <Route path="/about" element={<About />} />
      <Route path="/brands" element={<BrandDirectory />} />
      <Route path="/brand/:id" element={<BrandPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/stories" element={<StoryPage />} />
      <Route path="/story/:id" element={<StoryDetail />} />
    </Routes>
  );
}
