import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { DesktopApp } from "./DesktopApp";
import { MobileApp } from "./mobile/MobileApp";
import { ProductDetail } from "./pages/ProductDetail";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <MobileApp /> : <DesktopApp />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}
