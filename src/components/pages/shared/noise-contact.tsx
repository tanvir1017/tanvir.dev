import { PopUpDialog } from "@/components/framework-components/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { DATA } from "@/data/resume";
import Link from "next/link";

export function NoiseTextures() {
  return (
    <div className="flex justify-center relative">
      <Card className="bg-card/80 relative w-full overflow-hidden border p-6 rounded-2xl!">
        <NoiseTexture noiseOpacity={0.45} />
        <CardHeader className="relative z-10 space-y-1 pb-4">
          <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl ">
            Get in Touch
          </CardTitle>
          <CardDescription className="text-muted-foreground text-balance">
            Want to chat? Just shoot me a dm{" "}
            <Link
              href={DATA.contact.social.email.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              with a direct question on mail
            </Link>{" "}
            and I&apos;ll respond whenever I can. I will ignore all soliciting.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10 space-y-4 pt-0">
          <PopUpDialog
            buttonText="Say Hello"
            buttonClassName="group/button relative cursor-pointer overflow-hidden px-8 active:scale-98 rounded-lg border border-foreground/10 bg-foreground/10 text-black! dark:text-white! hover:bg-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </CardContent>
      </Card>
    </div>
  );
}
