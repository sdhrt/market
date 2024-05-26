import { getUserIdeas } from "@/drizzle/idea";
import { ideaType } from "@/drizzle/schema";
import { Link } from "next-view-transitions";
import IdeaDeleteAlert from "./_components/IdeaDeleteAlert";

async function UserIdeas({ email }: { email: string }) {
  const ideas: ideaType[] = await getUserIdeas(email);
  return (
    <div className="flex flex-col gap-2 w-[80%] lg:w-[60%]">
      <h1 className="text-2xl font-bold text-yellow-500 mt-10">Ideas</h1>
      <div>
        {ideas.map((idea, index: number) => (
          <div key={index} className="flex flex-col gap-2">
            <Link href={`/idea/${idea.id}`}>
              <div className="rounded-md p-2 hover:bg-neutral-100">
                <h1 className="text-xl font-bold">{idea.title}</h1>
                <p className="truncate mt-2">{idea.description}</p>
              </div>
            </Link>
            <IdeaDeleteAlert id={idea?.id as number} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserIdeas;
