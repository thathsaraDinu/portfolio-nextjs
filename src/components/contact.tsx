import { useState } from "react";
import Image from "next/image";
import { ScrollAnimation } from "@/animation/scroll-animation";
import emailjs from "emailjs-com";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


export default function Contact({ theme }: { theme: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_183p21b", // Your service ID
        "template_i60sh09", // Your template ID
        formData,
        "7Nq7MitquV62K-twu" // Your user ID
      )
      .then(
        () => {
          setIsSending(false);
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        () => {
          setIsSending(false);
          setStatus("Error sending message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-10 py-20 md:px-10 px-5 max-w-screen-xl mx-auto"
    >
      <div className="flex flex-col items-center max-w-screen-xl text-start gap-10">
        <ScrollAnimation
          initial={{ opacity: 0, y: 50 }}
          className="flex flex-col gap-2 text-center justify-center"
        >
          <div className="custom-top-topic dark:text-lime-200">Contact</div>
          <div className="custom-second-topic dark:text-blue-400">
            Get in touch
          </div>
          <div className="custom-third-topic dark:text-blue-100">
            I&apos;m always open to new opportunities
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-4 md:gap-32 gap-5 mx-auto font-inter">
          <ScrollAnimation
            initial={{ opacity: 0, x: -50 }}
            className="col-span-4 md:col-span-2 flex justify-center flex-col items-center gap-"
          >
            <DotLottieReact
              src="images/red-shirt-man-coding.lottie"
              loop
              autoplay
              className="w-full pb-10" // Adjust height as per your design needs
            />
            <hr className="   hidden md:block md:w-1/2 dark:border-white border-black h-0  mb-5"></hr>
            {theme == "light" ? (
              <div className="flex gap-10 justify-center items-center">
                <a
                  href="https://wa.me/94704151942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-200"
                >
                  <Image
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    src="icons/whatsapp-svgrepo-com.svg"
                  />
                </a>
                <a
                  href="http://www.linkedin.com/in/thathsara-dinuwan-6872bb2ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-200"
                >
                  <Image
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    src="icons/linkedin-svgrepo-com-black.svg"
                  />
                </a>
                <a
                  href="https://github.com/thathsaraDinu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-200"
                >
                  <Image
                    alt="GitHub"
                    width={28}
                    height={28}
                    src="icons/github-142-svgrepo-com-black.svg"
                  />
                </a>
              </div>
            ) : (
              <div className="flex gap-10 justify-center items-center">
                <a
                  href="https://wa.me/94704151942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-200"
                >
                  <Image
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    src="icons/whatsapp-svgrepo-com-white.svg"
                  />
                </a>
                <a
                  href="http://www.linkedin.com/in/thathsara-dinuwan-6872bb2ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-200"
                >
                  <Image
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    src="icons/linkedin-svgrepo-com.svg"
                  />
                </a>
                <a
                  href="https://github.com/thathsaraDinu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-200"
                >
                  <Image
                    alt="GitHub"
                    width={28}
                    height={28}
                    src="icons/github-142-svgrepo-com.svg"
                  />
                </a>
              </div>
            )}
          </ScrollAnimation>
          <ScrollAnimation
            initial={{ opacity: 0, x: 50 }}
            className="col-span-4 md:col-span-2"
          >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Name"
                className="w-full rounded-md py-3 px-4 dark:text-white text-blue-950 bg-transparent border dark:border-white border-blue-900 focus:bg-transparent text-sm outline-blue-bg-blue-800"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full rounded-md py-3 px-4 dark:text-white text-blue-950 bg-transparent border dark:border-white border-blue-900 focus:bg-transparent text-sm outline-blue-bg-blue-800"
              />
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full rounded-md py-3 px-4 dark:text-white text-blue-950 bg-transparent border dark:border-white border-blue-900 focus:bg-transparent text-sm outline-blue-bg-blue-800"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                required
                rows={5}
                className="w-full rounded-md px-4 dark:text-white text-blue-950 bg-transparent border dark:border-white border-blue-900 focus:bg-transparent text-sm pt-3 outline-blue-bg-blue-800"
              ></textarea>
              <button
                type="submit"
                className="transition-all duration-200 text-white border border-black  font-semibold bg-blue-900 hover:bg-blue-950 tracking-wide rounded-md text-sm px-4 py-3 w-full"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
            {status && (
              <p className="text-center dark:text-white text-blue-950 mt-4">
                {status}
              </p>
            )}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
