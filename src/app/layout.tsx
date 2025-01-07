import { ThemeProvider } from "@/context/theme-context";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Suspense } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Customize weights
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Thathsara Dinuwan Portfolio</title>
        <link rel="icon" href="/icons/logo-icon.webp" type="image/webp" />
      </head>
      <body className={roboto.className}>
        <Suspense fallback={<Loader />}>
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}

// components/Loader.tsx
function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

