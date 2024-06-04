"use client";
import { toast } from "@/components/ui/use-toast";
import { ideaType } from "@/drizzle/schema";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";

function IdeaScroll({ search }: { search: string }) {
  const [ideas, setIdeas] = useState<Array<ideaType>>([]);
  const [limit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (loading) return;
      setLoading(true);
      const response = await fetch("/api/v1/get/ideas", {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          limit,
          offset,
          search,
        }),
      });
      const { data, error } = await response.json();
      if (error) {
        toast({
          title: `${error}`,
        });
        setLoading(false);
        return;
      }
      if (data) {
        setIdeas((prevIdeas) => [...prevIdeas, ...data]);
        setLoading(false);
      }
    };
    fetchData();
  }, [limit, offset, search, loading]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.scrollHeight &&
        !loading
      ) {
        setOffset((prevOffset) => prevOffset + 8);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="flex flex-col gap-4 w-[90%]">
      {ideas.map((idea, index) => (
        <Link href={`/idea/${idea.id}`} key={index}>
          <div className="border-2 rounded-md p-4 hover:bg-neutral-100/50">
            <h1 className="text-xl font-bold">{idea.title}</h1>
            <div className="text-muted-foreground text-sm">
              Idea from: {idea.creatorName}
            </div>
            <p className="truncate mt-2">{idea.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default IdeaScroll;
