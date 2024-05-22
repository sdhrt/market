import { getIdea } from "@/drizzle/idea";

interface paramsType {
  params: {
    id: number;
  };
}

async function IdeaIdPage({ params }: paramsType) {
  const idea = await getIdea(params.id);
  return (
    <div className="mx-8 my-4 md:mx-40 md:my-12 lg:mx-60">
      <div>
        <h1 className="text-2xl font-black">{idea?.title}</h1>
        <sub className="text-muted-foreground">Idea from: {idea?.creatorName}</sub>
        <p className="max-w-[80ch] mt-4">{idea?.description}</p>
      </div>
    </div>
  );
}

export default IdeaIdPage;
