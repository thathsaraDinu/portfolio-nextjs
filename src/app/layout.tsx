import { ThemeProvider } from "@/context/theme-context";
import "./globals.css";

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
      <body className="font-inter">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
