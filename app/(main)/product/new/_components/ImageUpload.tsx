import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUpload({
  setImages,
}: {
  setImages: (prev: any) => void;
}) {
  const [preview, setPreview] = React.useState<any[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: any & File) => {
      const cachedUrl = URL.createObjectURL(acceptedFiles[0]);
      setPreview((prev) => [...prev, cachedUrl]);
      setImages((prev: any) => [...prev, acceptedFiles[0]]);
    },
    [setImages],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div
        className={cn(
          "relative h-full flex-1 w-full rounded-xl bg-gray-900/5 p-8 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
          {
            "ring-blue-900/25 bg-blue-900/10": isDragActive,
          },
        )}
      >
        <div {...getRootProps()}>
          <Input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
        </div>
      </div>
      <div className="flex gap-2 flex-wrap p-2">
        {preview &&
          preview.map((p, index) => (
            <div key={index} className="relative w-40 h-40">
              <Image src={p} alt="Image preview" objectFit="contain" fill />
            </div>
          ))}
      </div>
    </div>
  );
}
