import { BLUR_FADE_DELAY } from "@/app/page";
import BlurFade from "@/components/framework-components/blur-fade";
import ContactSection from "./contact-section";

const Contacts = () => {
  return (
    <section id="contact">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <ContactSection />
      </BlurFade>
    </section>
  );
};

export default Contacts;
