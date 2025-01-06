export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="md:scroll-mt-navbar  dark:text-white text-blue-950 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
        <div className="flex justify-center flex-wrap items-center gap-5">
          <div className="text-sm text-gray-400">&copy; {currentYear} All rights reserved</div>
        </div>
<<<<<<< HEAD
        <div className="text-center text-sm text-gray-400">
          Designed and Developed by{" "}
          <a href="#" className="underline text-blue-500 hover:text-blue-700">
            Thathsara Dinuwan
          </a>
=======
        <div className="text-center text-sm">
          Thathsara Dinuwan
>>>>>>> 9dff6905df1a2c65a047058a78b5616bce3d9ae6
        </div>
      </div>
    </footer>
  );
}
