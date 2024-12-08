export default function Footer() {
  return (
    <footer className="bg-transparent dark:text-white text-blue-950 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
        <div className="flex justify-center flex-wrap items-center gap-5">
          <div className="text-sm">&copy; 2024 All rights reserved</div>
         
        </div>
        <div className="text-center text-sm">
          Designed and Developed by{" "}
          <a href="#" className="underline">
            Thathsara Dinuwan
          </a>
        </div>
      </div>
    </footer>
  );
}
