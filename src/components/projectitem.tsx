import { ScrollAnimation } from "@/animation/animation";

type ProjectItemProps = {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  language: string;
};

export function ProjectItem({
  title,
  description,
  link,
  imageUrl,
  language,
}: ProjectItemProps) {
  return (
    <ScrollAnimation className="bg-slate-800 border border-slate-600 relative h-[350px] col-span-1 text-blue-100 rounded-md shadow-md z-10 ">
      <a className="flex flex-col " href={link}>
        <img className="h-[150px] rounded-t-md object-cover" src={imageUrl} />
        <div className="flex flex-col justify-between items-start gap-3 px-3 py-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
          <div className="absolute left-0 bottom-0 text-sm text-slate-900 hover:underline px-2 py-1 rounded-full bg-slate-400 font-semibold m-4">
            {language}
          </div>
        </div>
      </a>
    </ScrollAnimation>
  );
}
