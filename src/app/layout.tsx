import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"], // Customize weights
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Thathsara Dinuwan Portfolio</title>
        <link rel="icon" href="/icons/logo-icon.webp" type="image/webp" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main> {children}</main>
        </ThemeProvider>{" "}
        <Analytics />
      </body>
    </html>
  );
}
