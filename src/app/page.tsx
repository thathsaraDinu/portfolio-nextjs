import { ThemeProvider } from "@/context/theme-context";

// Dynamically import the Wrapper component
import Wrapper from "../components/wrapper";

export default function Home() {
  return (
    <ThemeProvider>
      <Wrapper />
    </ThemeProvider>
  );
}
