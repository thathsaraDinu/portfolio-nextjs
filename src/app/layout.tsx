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
      <body>{children}</body>
    </html>
  );
}
