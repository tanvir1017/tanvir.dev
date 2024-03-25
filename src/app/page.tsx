import ContactMe from "@/components/home/contact-me/contact";
import NewHeadingSection from "@/components/home/header/new_heading-section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NewHeadingSection />

      <ContactMe />
    </main>
  );
}
