"use client";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ResumeIFrame = () => {
  const router = useRouter();

  return (
    <div className="container " style={{ minWidth: "100%", display: "table" }}>
      <div className=" max-w-[50.9996875rem] mx-auto py-10">
        <Button
          onClick={() => router.push("/")}
          variant="outline"
          className="px-8 border-white/45 hover:bg-white/15"
        >
          <span className="mr-2">
            <MoveLeft />
          </span>{" "}
          Home
        </Button>
      </div>
      <div>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQBaiUGe3EmA6WmfuGSrfwiCX7lngUyuyvTgwlxC8fQmsw7XBfRNKHsEpMHdMwEk18wYdYDwXrr_sRa/pub?embedded=true"
          className="min-h-[78rem] w-[50.9996875rem] h-[100dvh] mx-auto"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeIFrame;
