import { ScrollAnimation } from "@/animation/scroll-animation";

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
    <ScrollAnimation className="dark:bg-slate-800 bg-slate-200  border dark:border-slate-600 border-slate-300 relative h-[350px] col-span-1 dark:text-blue-100 text-blue-950 rounded-md shadow-md z-10 ">
      <a className="flex flex-col h-full w-full " href={link} target="_blank">
        <img className="h-[150px] rounded-t-md object-cover" src={imageUrl} />
        <div className="flex flex-col justify-between items-start gap-3 px-3 py-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
          <div className="absolute left-0 bottom-0 text-sm dark:text-slate-900 text-slate-100 hover:underline px-2 py-1 rounded-full dark:bg-slate-400 bg-slate-700 font-semibold m-4">
            {language}
          </div>
        </div>
      </a>
    </ScrollAnimation>
  );
}
