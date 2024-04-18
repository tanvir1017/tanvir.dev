import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/navbar/nav";
import { ThemeProvider } from "@/lib/utils/themeProvider";
import Footer from "@/components/shared/footer/footer";
import { Menu } from "@/components/ui/navbar-menu";
import { Navbar } from "@/components/shared/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class">
        {/* <NavBar /> */}
        <Navbar />
        <body className={inter.className}>{children}</body>
        <Footer />
      </ThemeProvider>
    </html>
  );
}
