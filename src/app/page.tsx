import NewHeadingSection from "@/components/home/header/new_heading-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-400">
      <NewHeadingSection />
    </main>
  );
}
