import { getIdeasCount } from "@/drizzle/idea";
import SearchQuery from "../(_components)/Search/SearchQuery";
import IdeaScroll from "./_components/IdeaScroll";

async function IdeaPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <div className="mx-4 md:mx-40 lg:mx-60 flex flex-col items-center gap-4">
      <div className="m-4 w-60">
        <SearchQuery query="idea" search={searchParams?.search} />
      </div>
      <IdeaScroll search={searchParams?.search as string} />
    </div>
  );
}

export default IdeaPage;
