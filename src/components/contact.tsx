export function Contact() {
  return (
    <div className="flex flex-col items-center gap-10 py-20 px-5 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center max-w-screen-xl text-start gap-10 ">
        <div className="flex flex-col gap-2 text-center justify-center">
          <div className="custom-top-topic">Contact</div>
          <div className="custom-second-topic">Get in touch</div>
          <div className="custom-third-topic">
            I'm always open to new opportunities
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 mx-auto font-inter">
          <div className="col-span-3 flex justify-center items-center">
            <img
              src="/images/pexels-olly-846741.jpg"
              alt="about"
              className="hidden md:block w-full object-cover rounded-lg max-w-[400px]"
            ></img>
          </div>
          <div className="col-span-5 md:col-span-2">
            <form className=" space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md py-3 px-4 text-white bg-transparent border border-white focus:bg-transparent text-sm outline-blue-bg-blue-800"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md py-3 px-4 text-white bg-transparent border border-white focus:bg-transparent text-sm outline-blue-bg-blue-800"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md py-3 px-4 text-white bg-transparent border border-white focus:bg-transparent text-sm outline-blue-bg-blue-800"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full rounded-md px-4 text-white bg-transparent border border-white focus:bg-transparent text-sm pt-3 outline-blue-bg-blue-800"
              ></textarea>
              <button
                type="button"
                className="transition-all duration-200 text-white border border-black  font-semibold bg-blue-900 hover:bg-blue-950 tracking-wide rounded-md text-sm px-4 py-3 w-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
