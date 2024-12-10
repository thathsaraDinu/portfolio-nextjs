"use client"
import { ThemeProvider } from "@/context/theme-context";

// Dynamically import the Wrapper component
import dynamic from "next/dynamic";

const Wrapper = dynamic(() => import("../components/wrapper"), {ssr: false});

export default function Home() {
  return (
    <ThemeProvider>
      <Wrapper />
    </ThemeProvider>
  );
}
