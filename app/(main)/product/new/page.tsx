"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React, { ChangeEvent } from "react";
import ImageUpload from "./_components/ImageUpload";
import ProductUpload from "./_components/ProductUpload";

function NewProductPage() {
  const [input, setInput] = React.useState({
    name: "",
    price: "",
    description: "",
  });

  const [images, setImages] = React.useState<Array<string | undefined>>([]);

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="font-bold text-xl">Create a new product</h1>
      <div className="flex flex-col mt-10 gap-4">
        <div>
          <Label>Name of your product</Label>
          <Input
            name="name"
            onChange={handleInputChange}
            placeholder="Name..."
          />
        </div>
        <div>
          <Label>Price of your product</Label>
          <Input
            pattern="/^\d+(,\d{1,2})?$/"
            type="number"
            placeholder="NPR - Price..."
            name="price"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label>Description of your product</Label>
          <Textarea
            placeholder="Describe your product..."
            name="description"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label>Select upto 3 images</Label>
          <ImageUpload setImages={setImages} />
        </div>
        <div>
          <ProductUpload input={input} images={images} />
        </div>
      </div>
    </div>
  );
}

export default NewProductPage;
