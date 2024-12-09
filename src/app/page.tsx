"use client"
import { ThemeProvider } from "@/context/theme-context";
import dynamic from "next/dynamic";

// Dynamically import the Wrapper component
const Wrapper = dynamic(() => import("../components/wrapper"), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider>
      <Wrapper />
    </ThemeProvider>
  );
}
