"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

function IdeaDeleteAlert({ id }: { id: number }) {
  const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    try {
      const response = await fetch("/api/v1/delete/idea", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      const { data, error } = await response.json();
      if (error) {
        toast({
          title: error,
        });
        return;
      }
      if (data) {
        toast({
          title: `Your idea has been deleted`,
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Try again later",
        variant: "destructive",
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size={"sm"}
          variant={"destructive"}
          className="font-semibold w-fit"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to delete your idea?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the idea
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default IdeaDeleteAlert;
