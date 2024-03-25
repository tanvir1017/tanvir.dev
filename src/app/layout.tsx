import { Inter } from "next/font/google";
import "./global.css";
import NavBar from "@/components/shared/navbar/nav";
import { ThemeProvider } from "@/lib/utils/themeProvider";
import Footer from "@/components/shared/footer/footer";

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
        <body className={inter.className}>{children}</body>
        <Footer />
      </ThemeProvider>
    </html>
  );
}
