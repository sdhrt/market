import { getIdeas } from "@/drizzle/idea";
import { ideaType } from "@/drizzle/schema";
import { Link } from "next-view-transitions";
import SearchQuery from "../(_components)/Search/SearchQuery";

async function IdeaPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const ideas: Array<ideaType> = await getIdeas({
    query: searchParams?.search,
  });
  return (
    <div className="mx-4 md:mx-40 lg:mx-60 flex flex-col items-center gap-4">
      <div className="m-4 w-60">
        <SearchQuery query="idea" search={searchParams?.search} />
      </div>
      <div className="flex flex-col gap-4 w-[80%] lg:w-[60%]">
        {ideas.map((idea, index: number) => (
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
    </div>
  );
}

export default IdeaPage;
