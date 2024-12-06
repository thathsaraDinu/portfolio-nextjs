type ProjectItemProps = {
  title: string;
  description: string;
  link: string;
};

export function ProjectItem({ title, description, link }: ProjectItemProps) {
  return (
    <div className="bg-blue-950 h-[350px] col-span-1 text-blue-100 rounded-md shadow-md">
      <div className="flex flex-col">
        <img
          className="h-[150px] rounded-t-md object-cover"
          src="images/pexels-olly-846741.jpg"
        />
        <div className="flex flex-col justify-between items-start gap-3 px-3 py-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold ">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
          <a href={link} className="text-sm text-blue-300 hover:underline">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
