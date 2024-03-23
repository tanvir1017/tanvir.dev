import { Inter } from "next/font/google";
import "./global.css";
import NavBar from "@/components/shared/navbar/nav";
import { ThemeProvider } from "@/utils/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NavBar />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
