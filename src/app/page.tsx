import { ThemeProvider } from "@/context/theme-context";
import Wrapper from "../components/wrapper";

export default function Home() {
  return (
    <ThemeProvider>
      <Wrapper />
    </ThemeProvider>
  );
}
