import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Roboto } from "next/font/google";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Thathsara Dinuwan Portfolio</title>
        <link rel="icon" href="/icons/logo-icon.webp" type="image/webp" />
      </head>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main> {children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
