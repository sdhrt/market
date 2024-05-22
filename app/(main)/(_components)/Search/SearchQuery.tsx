"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

function SearchQuery({
  query,
  search = "",
}: {
  query: string;
  search?: string;
}) {
  const router = useRouter();
  const [text, setText] = useState(search);
  const [debouncedText] = useDebounce(text, 300);

  useEffect(() => {
    if (!debouncedText) {
      router.push(`/${query}`);
    } else {
      router.push(`/${query}?search=${debouncedText}`);
    }
  }, [debouncedText, router]);

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Input value={text} onChange={handleText} placeholder="Search..." />
    </div>
  );
}

export default SearchQuery;
