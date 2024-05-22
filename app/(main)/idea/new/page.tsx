"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function NewIdeaPage() {
  const { user } = useUser();
  const router = useRouter();

  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async () => {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;

    if (title == "" || title == null) {
      toast({
        title: "Title cannot be blank",
      });
      titleRef.current?.focus();
      return;
    }
    if (description == "" || description == null) {
      toast({
        title: "Description cannot be blank",
        description: "Please describe your idea",
      });
      descriptionRef.current?.focus();
      return;
    }
    const creatorName = user?.fullName as string;
    const creatorEmail = user?.primaryEmailAddress?.emailAddress as string;
    try {
      const response = await fetch("/api/v1/create/idea", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          creatorName,
          creatorEmail,
        }),
      });
      const { data, error } = await response.json();
      if (error) {
        toast({
          title: `${error}`,
        });
        return;
      }

      if (data) {
        toast({
          title: `${data.message}`,
        });
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="m-20 flex justify-center">
      <div className="flex flex-col gap-4 w-96">
        <div className="">
          <Label>Title</Label>
          <Input
            ref={titleRef}
            placeholder="Your idea title..."
            className="font-semibold will-change-contents"
          />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea ref={descriptionRef} placeholder="Describe your idea" />
        </div>
        <div className="flex justify-center">
          <Button onClick={handleSubmit} variant={"outline"}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewIdeaPage;
