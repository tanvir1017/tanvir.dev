import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/navbar/nav";
import { ThemeProvider } from "@/lib/utils/themeProvider";
import Footer from "@/components/shared/footer/footer";
import { Menu } from "@/components/ui/navbar-menu";
import { NavbarDemo } from "@/components/shared/navbar/menu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <NavBar />
        <NavbarDemo />
        <body className={inter.className}>{children}</body>
        <Footer />
      </ThemeProvider>
    </html>
  );
}
