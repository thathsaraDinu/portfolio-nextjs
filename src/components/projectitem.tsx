type ProjectItemProps = {
  title: string;
  description: string;
  link: string;
};

export function ProjectItem({ title, description, link }: ProjectItemProps) {
  return (
    <div className="bg-slate-100 h-[300px] col-span-1  rounded-md shadow-md">
      <div className="flex flex-col">
        <img className="h-[150px] rounded-t-md object-cover" src="images/pexels-olly-846741.jpg" />
        <div className="flex flex-col gap-3 px-3 py-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm">{description}</p>
          <a href={link} className="text-sm text-blue-500 hover:underline">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
