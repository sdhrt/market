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

function DeleteAlert({ name }: { name: string }) {
  const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    try {
      const response = await fetch("/api/v1/delete/product", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: name }),
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
          title: `${name} has been deleted`,
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
        <Button size={"sm"} variant={"destructive"} className="font-semibold">
          Delete {name}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to delete {name}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            product
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

export default DeleteAlert;
