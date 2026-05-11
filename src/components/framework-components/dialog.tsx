import { BLUR_FADE_DELAY } from "@/app/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import BlurFade from "./blur-fade";

export function PopUpDialog({
  buttonText = "Contact Card",
}: {
  buttonText?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="cursor-pointer bg-transparent hover:bg-transparent text-white border h-6 "
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse mr-2" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-2 overflow-hidden rounded-3xl!">
        <DialogHeader className="p-3">
          <DialogTitle>Qr Code & Contacts</DialogTitle>
          <DialogDescription>
            Scan the QR code to get my contact information
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-start gap-2 p-3 rounded-2xl bg-secondary -mt-5">
          <BlurFade delay={BLUR_FADE_DELAY} className="">
            <Avatar className="size-24 md:size-32 border shadow-lg rounded-lg!">
              <AvatarImage alt={DATA.name} src={"/qrcode.svg"} className="" />
              <AvatarFallback>{"QR"}</AvatarFallback>
            </Avatar>
          </BlurFade>

          <div>
            <h6 className="uppercase tracking-widest text-muted-foreground text-sm">
              Contact
            </h6>
            <div className="flex flex-wrap items-center justify-start gap-1 mt-2">
              {DATA.contacts.map((_, id) => (
                <BlurFade
                  key={`contact-${_}-${id}`}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                >
                  <div className="border bg-background border-border ring-2 ring-border/20 rounded-lg h-8 w-fit px-4 flex items-center gap-2 cursor-pointer">
                    {_.icon && (
                      <_.icon className="size-4 rounded overflow-hidden object-contain" />
                    )}
                    <span className="text-foreground text-sm font-medium">
                      {_.name}
                    </span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
