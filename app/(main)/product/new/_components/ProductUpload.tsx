import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import React from "react";

interface productProps {
  input: {
    name: string;
    price: string;
    description: string;
  };
  images: any & any[];
}
function ProductUpload({ input, images }: productProps) {
  const { user } = useUser();
  const [isUploading, setIsUploading] = React.useState<boolean>(false);
  const [imagesUrl, setImagesUrl] = React.useState<string[]>([]);

  async function uploadProduct() {
    setIsUploading(true);

    if (input.name == "") {
      toast({
        title: "Name cannot be blank",
        variant: "destructive",
      });
      setIsUploading(false);
      return;
    }

    if (Number(input.price) <= 0) {
      toast({
        title: "Enter a valid price",
        variant: "destructive",
      });
      setIsUploading(false);
      return;
    }

    if (input.description.trim().length < 10) {
      toast({
        title: "Describe your product in more than 10 characters",
        variant: "destructive",
      });
      setIsUploading(false);
      return;
    }

    if (images.length < 1) {
      toast({
        title: "At least select 1 image",
        variant: "destructive",
      });
      setIsUploading(false);
      return;
    }

    if (images.length > 2) {
      toast({
        title: "Please refresh and select only 3 images",
        variant: "destructive",
      });
      setIsUploading(false);
      return;
    }

    const uploadImages = async () => {
      const promises = Object.values(images).map(async (img: any) => {
        const response = await fetch(
          `/api/v1/create/image?filename=${img.name}`,
          {
            method: "POST",
            body: img,
          },
        );
        const imageUrl = await response.json();
        return imageUrl.url;
      });

      return await Promise.all(promises);
    };

    if (user && user.primaryEmailAddress) {
      const seller = {
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
      };

      const response = await fetch("/api/v1/create/product", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: input.name,
          price: input.price,
          description: input.description.trim(),
          images: await uploadImages(),
          seller,
        }),
      });
      const { data, error } = await response.json();
      setIsUploading(false);
      if (error) {
        toast({
          title: `${error}`,
        });
        return;
      } else {
        toast({
          title: "Product registered",
          description: `${data.message}`,
        });
        return;
      }
    }
  }

  return (
    <Button variant={"outline"} onClick={uploadProduct} disabled={isUploading}>
      Upload Product
    </Button>
  );
}

export default ProductUpload;
