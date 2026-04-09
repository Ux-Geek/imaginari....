import { useMediaQuery } from "./hooks/useMediaQuery";
import { DesktopApp } from "./DesktopApp";
import { MobileApp } from "./mobile/MobileApp";

export default function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <MobileApp /> : <DesktopApp />;
}
